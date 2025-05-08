import fs from 'fs'
import OpenAI from 'openai'
import { Octokit } from '@octokit/rest'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const octo = new Octokit({ auth: process.env.GITHUB_TOKEN })
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')

async function main() {
  const path = 'prompts/facebook-headline-generator/index.html'
  const old = fs.readFileSync(path, 'utf8')

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Be terse and practical.' },
      { role: 'user', content: `Fix broken links in this HTML:\n\n${old}` }
    ]
  })

  const updated = res.choices[0].message.content
  if (updated !== old) {
    fs.writeFileSync(path, updated)
    const { data: { sha } } = await octo.repos.getContent({ owner, repo, path })
    await octo.repos.createOrUpdateFileContents({
      owner, repo, path,
      message: 'chore: automated AI link fix',
      content: Buffer.from(updated).toString('base64'),
      sha
    })
  }
}

main().catch(e => { console.error(e); process.exit(1) })
