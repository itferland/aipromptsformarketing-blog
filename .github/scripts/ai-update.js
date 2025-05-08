// .github/scripts/ai-update.js

import fs from 'fs';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const octo   = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

async function main() {
  const filePath   = 'prompts/facebook-headline-generator/index.html';
  const oldContent = fs.readFileSync(filePath, 'utf8');

  const resp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Be terse and practical.' },
      { role: 'user',   content: `Fix any broken links in this HTML:\n\n${oldContent}` }
    ]
  });

  const newContent = resp.choices[0].message.content;
  if (newContent !== oldContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    const { data: { sha } } = await octo.repos.getContent({ owner, repo, path: filePath });
    await octo.repos.createOrUpdateFileContents({
      owner,
      repo,
      path:    filePath,
      message: 'chore: automated AI link fix',
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
