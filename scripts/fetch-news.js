import fs from 'fs/promises';
import path from 'path';
import Parser from 'rss-parser';
import { createHash } from 'crypto';
import fetch from 'node-fetch';

const parser = new Parser({
  customFields: { item: ['description', 'content:encoded', 'summary'] }
});

const RSS_SOURCES = [
  { url: 'https://rss.cnn.com/rss/edition.rss', name: 'CNN Tech' },
  { url: 'https://feeds.feedburner.com/TechCrunch', name: 'TechCrunch' },
  { url: 'https://www.wired.com/feed/rss', name: 'Wired' },
  { url: 'https://feeds.arstechnica.com/arstechnica/index', name: 'Ars Technica' },
  { url: 'https://rss.slashdot.org/Slashdot/slashdotMain', name: 'Slashdot' },
  { url: 'https://feeds.feedburner.com/venturebeat/SZYF', name: 'VentureBeat' }
];

const KEYWORDS = [
  'artificial intelligence', 'machine learning', 'automation', 'ai',
  'gpt', 'chatgpt', 'neural', 'workflow', 'llm'
];

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

const delay = ms => new Promise(r => setTimeout(r, ms));

const slugify = text => text
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

const hash = str => createHash('md5').update(str).digest('hex').substring(0,8);

async function sendWebhook(message) {
  const discord = process.env.DISCORD_WEBHOOK_URL;
  const slack = process.env.SLACK_WEBHOOK_URL;
  const payloadDiscord = { content: message };
  const payloadSlack = { text: message };

  const send = async (url, payload) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error('Webhook error:', err.message);
    }
  };

  if (discord) await send(discord, payloadDiscord);
  if (slack) await send(slack, payloadSlack);
}

async function fetchFeed(url, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await parser.parseURL(url);
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`Retry ${attempt + 1} for ${url}: ${err.message}`);
      await delay(1000 * (attempt + 1));
    }
  }
}

function relevant(text) {
  const lower = text.toLowerCase();
  return KEYWORDS.some(k => lower.includes(k));
}

function buildFrontmatter(post) {
  const fm = {
    title: post.title,
    description: post.description,
    pubDate: post.pubDate,
    author: post.author,
    source: post.source,
    sourceUrl: post.link,
    tags: post.tags
  };
  const yaml = Object.entries(fm)
    .map(([k,v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n');
  return `---\n${yaml}\n---\n\n${post.content}\n`;
}

async function savePost(post) {
  await fs.mkdir(POSTS_DIR, { recursive: true });
  const slug = `${slugify(post.title)}-${hash(post.title)}`;
  const file = path.join(POSTS_DIR, `${slug}.md`);
  try {
    await fs.access(file);
    console.log(`Skipping existing post: ${slug}`);
    return false;
  } catch {
    await fs.writeFile(file, buildFrontmatter(post), 'utf8');
    console.log(`Saved post: ${slug}`);
    return true;
  }
}

async function cleanupOld(days = 30) {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  try {
    const files = await fs.readdir(POSTS_DIR);
    for (const name of files) {
      if (!name.endsWith('.md')) continue;
      const filePath = path.join(POSTS_DIR, name);
      const stat = await fs.stat(filePath);
      if (stat.mtimeMs < cutoff) {
        await fs.unlink(filePath);
        console.log(`Removed old post: ${name}`);
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') console.error('Cleanup failed:', err.message);
  }
}

async function gatherPosts() {
  const posts = [];
  for (const src of RSS_SOURCES) {
    console.log(`Fetching from ${src.name}`);
    try {
      const feed = await fetchFeed(src.url);
      for (const item of feed.items) {
        const desc = item['content:encoded'] || item.description || item.summary || '';
        if (!item.title || !item.link) continue;
        if (!relevant(item.title + ' ' + desc)) continue;
        posts.push({
          title: item.title,
          description: desc.replace(/<[^>]+>/g,'').slice(0,160),
          pubDate: new Date(item.pubDate || item.isoDate || Date.now()).toISOString(),
          author: item.creator || item.author || src.name,
          source: src.name,
          link: item.link,
          tags: [src.name],
          content: desc.length ? desc : `[Read more](${item.link})`
        });
      }
    } catch (err) {
      console.error(`Failed to fetch ${src.name}:`, err.message);
    }
    await delay(1000);
  }
  return posts.slice(0, 10);
}

async function main() {
  try {
    const posts = await gatherPosts();
    let created = 0;
    for (const post of posts) {
      if (await savePost(post)) created++;
    }
    await cleanupOld();
    console.log(`Done. ${created} new posts.`);
    if (created > 0) {
      await sendWebhook(`Blog updated with ${created} new posts.`);
    }
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
}

main();
