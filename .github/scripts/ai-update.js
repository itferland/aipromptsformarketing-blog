// File: .github/scripts/ai-update.js
import fs from 'fs';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai'; // Using OpenAI library configured for Groq

// Configure the client with the Groq API key and endpoint
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY, // Reads environment variable set in ai-update.yml
  baseURL: 'https://api.groq.com/openai/v1' // Correct Groq API endpoint
});

// Configure Octokit for GitHub API interaction
const octo = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

// Main function to perform the update
async function main() {
  const filePath = 'tool-reviews/index.md'; // Ensure correct relative path

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  // Read the current content
  const oldContent = fs.readFileSync(filePath, 'utf8');
  console.log(`📄 Read current content from ${filePath}`);

  try {
    console.log('🤖 Calling Groq API...');
    const response = await openai.chat.completions.create({
      model: 'llama3-8b-8192', // Valid Groq model
      messages: [
        { role: 'system', content: 'You’re a concise Jekyll content maintainer.' },
        { role: 'user', content: `Review and improve this Markdown page:\n\n${oldContent}` }
      ],
      temperature: 0.7
    });
    console.log('✅ Groq API call successful.');

    // Extract AI-generated content
    const newContent = response.choices[0]?.message?.content;
    console.log('New content:', newContent);

    if (!newContent) {
      console.error('❌ Failed to get valid content from Groq response.');
      process.exit(1);
    }

    if (newContent.trim() !== oldContent.trim()) {
      console.log('✨ AI-generated changes detected. Writing to file and committing...');
      fs.writeFileSync(filePath, newContent, 'utf8');

      // Get SHA hash of existing file
      const { data: { sha } } = await octo.repos.getContent({ owner, repo, path: filePath });

      // Commit updated file
      await octo.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: filePath,
        message: `chore: automated AI update of ${filePath}`,
        content: Buffer.from(newContent).toString('base64'),
        sha
      });

      console.log(`✅ Updated and committed ${filePath}`);
    } else {
      console.log('✅ No changes detected from AI. Nothing to commit.');
    }
  } catch (err) {
    console.error('❌ Error during Groq API call:', err);
    if (err.status === 429 || err.code === 'insufficient_quota') {
      console.warn('⚠️ Groq quota likely hit or rate-limited; skipping update.');
      return;
    }
    throw err;
  }
}

// Run the function and handle errors
main().catch(err => {
  process.exit(1);
});
