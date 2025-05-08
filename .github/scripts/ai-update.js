// File: .github/scripts/ai-update.js
import fs from 'fs';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const octo   = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

async function main() {
  const filePath = 'tool-reviews/index.md';

  // Bail early if path is wrong
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  // Read the current content
  const oldContent = fs.readFileSync(filePath, 'utf8');

  // Ask GPT to update/fix it (e.g. headings, Liquid tags, links)
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You’re a concise Jekyll content maintainer.' },
      { role: 'user', content: `Review and improve this Markdown page:\n\n${oldContent}` }
    ]
  });

  const newContent = response.choices[0].message.content;

  // If GPT changed anything, write + commit
  if (newContent !== oldContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');

    // Get the file’s latest SHA
    const {
      data: { sha }
    } = await octo.repos.getContent({ owner, repo, path: filePath });

    // Push the update back to GitHub
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
