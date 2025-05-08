// File: .github/scripts/ai-update.js
import fs from 'fs';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai';

// ← Use your Groq key and endpoint here
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  apiBaseUrl: 'https://api.groq.dev/v1'
});

const octo = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

async function main() {
  const filePath = 'tool-reviews/index.md';

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  const oldContent = fs.readFileSync(filePath, 'utf8');

  let response;
  try {
    response = await openai.chat.completions.create({
      model: 'llama3-8b-8192', // Use a valid Groq model
      messages: [
        { role: 'system', content: 'You’re a concise Jekyll content maintainer.' },
        { role: 'user',   content: `Review and improve this Markdown page:\n\n${oldContent}` }
      ]
    });
  } catch (err) {
    if (err.code === 'insufficient_quota' || err.status === 429) {
      console.warn('⚠️  Groq quota hit or rate-limited; skipping update.');
      return;
    }
    throw err;
  }

  const newContent = response.choices[0].message.content;
  if (newContent !== oldContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');

    const { data: { sha } } = await octo.repos.getContent({ owner, repo, path: filePath });
    await octo.repos.createOrUpdateFileContents({
      owner,
      repo,
      path:    filePath,
      message: 'chore: automated AI update of tool-reviews/index.md',
      content: Buffer.from(newContent).toString('base64'),
      sha
    });

    console.log(`✅ Updated and committed ${filePath}`);
  } else {
    console.log('⚠️  No changes detected.');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
