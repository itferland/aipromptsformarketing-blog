// .github/scripts/ai-update.js

const fs = require('fs');
const { Octokit } = require('@octokit/rest');
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const octo   = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

async function main() {
  const filePath = 'prompts/facebook-headline-generator/index.html';
  const oldContent = fs.readFileSync(filePath, 'utf8');

  // 1) Ask GPT to fix broken links
  const resp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Be terse and practical.' },
      { role: 'user',   content: `Fix any broken links in this HTML:\n\n${oldContent}` }
    ]
  });

  const newContent = resp.choices[0].message.content;
  if (newContent !== oldContent) {
    // 2) Overwrite the file locally
    fs.writeFileSync(filePath, newContent, 'utf8');

    // 3) Grab the current SHA for that file
    const { data: { sha } } = await octo.repos.getContent({
      owner, repo, path: filePath
    });

    // 4) Push the update back to GitHub
    await octo.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
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
