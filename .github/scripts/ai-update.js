// File: .github/scripts/ai-update.js
import fs from 'fs';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai'; // Use the OpenAI library, but configured for Groq

// Configure the client to use the Groq API key (from environment variable) and Groq's endpoint
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY, // Reads the environment variable set in ai-update.yml
  baseURL: 'https://api.groq.com/openai/v1' // Use the correct Groq OpenAI-compatible endpoint (Note: it's baseURL, not apiBaseUrl for v4+)
});

// Configure Octokit to interact with GitHub API
const octo = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

// Main function to perform the update
async function main() {
  // Define the path to the file you want the AI to update
  const filePath = 'tool-reviews/index.md'; // Make sure this is the correct path relative to the repo root

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1); // Exit if file doesn't exist
  }

  // Read the current content of the file
  const oldContent = fs.readFileSync(filePath, 'utf8');
  console.log(`📄 Read current content from ${filePath}`);

  let response;
  try {
    // Make the API call to Groq using the OpenAI library's interface
    console.log('🤖 Calling Groq API...');
    response = await openai.chat.completions.create({
      model: 'llama3-8b-8192', // Use a valid Groq model identifier
      messages: [
        { role: 'system', content: 'You’re a concise Jekyll content maintainer.' },
        { role: 'user',   content: `Review and improve this Markdown page:\n\n${oldContent}` }
      ],
      temperature: 0.7 // Optional: Adjust creativity/randomness
    });
    console.log('✅ Groq API call successful.');

  } catch (err) {
    console.error('❌ Error during Groq API call:', err); // Log the full error
    // Handle specific errors like quota limits if needed
    if (err.status === 429 || err.code === 'insufficient_quota') { // Check status code or specific error codes
      console.warn('⚠️ Groq quota likely hit or rate-limited; skipping update.');
      return; // Exit gracefully without failing the whole action
    }
    // For other errors (like auth errors, which should be fixed by correct secret), throw to fail the action
    throw err;
  }

  // Extract the AI-generated content
  const newContent = response.choices[0]?.message?.content;

  // Check if we actually got new content
  if (!newContent) {
      console.error('❌ Failed to get valid content from Groq response.');
      process.exit(1);
  }

  // Compare new content with old content (trim whitespace for comparison)
  if (newContent.trim() !== oldContent.trim()) {
    console.log('✨ AI generated changes detected. Writing to file and committing...');
    // Write the new content back to the file
    fs.writeFileSync(filePath, newContent, 'utf8');

    // Get the SHA hash of the existing file (needed for updating via GitHub API)
    const { data: { sha } } = await octo.repos.getContent({ owner, repo, path: filePath });

    // Commit the updated file back to the repository
    await octo.repos.createOrUpdateFileContents({
      owner,
      repo,
      path:    filePath,
      message: `chore: automated AI update of ${filePath}`, // Commit message
      content: Buffer.from(newContent).toString('base64'), // Content must be base64 encoded
      sha                                                   // Provide the previous file SHA
    });

    console.log(`✅ Updated and committed ${filePath}`);
  } else {
    console.log('✅ No changes detected from AI. Nothing to commit.');
  }
}

// Execute the main function and handle any top-level errors
main().catch(err => {
  // console.error(err); // Already logged within the try/catch usually
  process.exit(1); // Ensure the action fails if an error occurs
});
