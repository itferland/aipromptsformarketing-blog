import fs from 'fs/promises';
import path from 'path';
import Parser from 'rss-parser';
import { createHash } from 'crypto';

const parser = new Parser({
  customFields: { item: ['description', 'content:encoded', 'summary'] }
});

const SOURCES = [
  { url: 'https://rss.cnn.com/rss/edition.rss', name: 'CNN Tech' },
  { url: 'https://feeds.feedburner.com/TechCrunch', name: 'TechCrunch' },
  { url: 'https://www.wired.com/feed/rss', name: 'Wired' },
  { url: 'https://feeds.arstechnica.com/arstechnica/index', name: 'Ars Technica' },
  { url: 'https://rss.slashdot.org/Slashdot/slashdotMain', name: 'Slashdot' },
  { url: 'https://feeds.feedburner.com/venturebeat/SZYF', name: 'VentureBeat' }
];

const KEYWORDS = [
  'artificial intelligence', 'machine learning', 'automation', 'ai',
  'gpt', 'chatgpt', 'neural', 'workflow automation', 'llm'
];

const TAG_KEYWORDS = {
  'Machine Learning': ['machine learning', 'ml', 'neural', 'deep learning'],
  'Automation': ['automation', 'workflow'],
  'ChatGPT': ['chatgpt', 'gpt', 'openai', 'llm'],
  'Business': ['business', 'enterprise', 'corporate'],
  'Innovation': ['innovation', 'breakthrough', 'advancement'],
  'Research': ['research', 'study', 'academic']
};

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');
const delay = ms => new Promise(r => setTimeout(r, ms));

const slugify = text => text
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

const hash = str => createHash('md5').update(str).digest('hex').substring(0,8);

const readingTime = text => {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
};

const cleanText = html => html.replace(/<[^>]+>/g, '');

function isRelevant(title, desc) {
  const text = `${title} ${desc}`.toLowerCase();
  return KEYWORDS.some(k => text.includes(k));
}

function detectTags(title, desc, fallback) {
  const text = `${title} ${desc}`.toLowerCase();
  const tags = new Set([fallback]);
  for (const [tag, kws] of Object.entries(TAG_KEYWORDS)) {
    if (kws.some(k => text.includes(k))) tags.add(tag);
  }
  return Array.from(tags);
}

function buildFrontmatter(post) {
  const fm = {
    title: post.title,
    date: post.date,
    description: post.description,
    link: post.link,
    source: post.source,
    tags: post.tags,
    readTime: post.readTime,
    author: post.author
  };
  const yaml = Object.entries(fm)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n');
  return `---\n${yaml}\n---\n\n${post.content}\n`;
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

async function gatherPosts() {
  const posts = [];
  for (const src of SOURCES) {
    console.log(`Fetching from ${src.name}`);
    try {
      const feed = await fetchFeed(src.url);
      for (const item of feed.items) {
        const raw = item['content:encoded'] || item.description || item.summary || '';
        if (!item.title || !item.link) continue;
        if (!isRelevant(item.title, raw)) continue;
        const plain = cleanText(raw);
        posts.push({
          title: item.title,
          date: new Date(item.pubDate || item.isoDate || Date.now()).toISOString(),
          description: plain.slice(0,160),
          link: item.link,
          source: src.name,
          tags: detectTags(item.title, plain, src.name),
          readTime: readingTime(plain),
          author: item.creator || item.author || src.name,
          content: plain.length ? plain : `[Read more](${item.link})`
        });
      }
    } catch (err) {
      console.error(`Failed to fetch ${src.name}:`, err.message);
    }
    await delay(1000);
  }
  return posts;
}

async function savePost(post) {
  await fs.mkdir(POSTS_DIR, { recursive: true });
  const slug = `${slugify(post.title)}-${hash(post.title)}`;
  const file = path.join(POSTS_DIR, `${slug}.md`);
  try {
    await fs.access(file);
    console.log(`⚠️  Skipping existing post: ${slug}`);
    return false;
  } catch {
    await fs.writeFile(file, buildFrontmatter(post), 'utf8');
    console.log(`✅ Saved post: ${slug}`);
    return true;
  }
}

async function cleanupOld(max = 100) {
  const files = (await fs.readdir(POSTS_DIR)).filter(f => f.endsWith('.md'));
  if (files.length <= max) return;
  const stats = await Promise.all(files.map(async f => ({
    name: f,
    mtime: (await fs.stat(path.join(POSTS_DIR, f))).mtimeMs
  })));
  stats.sort((a,b) => a.mtime - b.mtime);
  for (const {name} of stats.slice(0, files.length - max)) {
    await fs.unlink(path.join(POSTS_DIR, name));
    console.log(`🗑️  Removed old post: ${name}`);
  }
}

async function main() {
  try {
    const gathered = await gatherPosts();
    const newPosts = [];
    for (const post of gathered) {
      if (newPosts.length >= 10) break;
      if (await savePost(post)) newPosts.push(post);
    }
    await cleanupOld();
    console.log(`Done. ${newPosts.length} new posts.`);
    if (newPosts.length > 0) {
      const msg = `Blog updated with ${newPosts.length} new posts.`;
      if (process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL) {
        await fetch(process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: msg, text: msg })
        }).catch(err => console.error('Webhook error:', err.message));
      }
    }
  } catch (err) {
    console.error('Fatal error:', err.message);
    process.exit(1);
  }
}

main();
