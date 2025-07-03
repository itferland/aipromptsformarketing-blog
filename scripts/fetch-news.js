import fs from 'fs/promises';
import path from 'path';
import Parser from 'rss-parser';
import { createHash } from 'crypto';

const parser = new Parser();
const FEED_URL = 'https://www.theverge.com/rss/index.xml'; // or your preferred feed
const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');

function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function hashTitle(title) {
  return createHash('md5').update(title).digest('hex').slice(0, 8);
}

async function main() {
  const feed = await parser.parseURL(FEED_URL);
  const today = new Date().toISOString().split('T')[0];

  for (const item of feed.items.slice(0, 3)) {
    const slug = `${generateSlug(item.title)}-${hashTitle(item.title)}`;
    const filename = `${slug}.md`;
    const filepath = path.join(POSTS_DIR, filename);

    const content = `---
title: "${item.title.replace(/"/g, "'")}"
pubDate: "${today}"
description: "${item.contentSnippet || ''}"
author: "${item.creator || 'Unknown'}"
tags: ["rss", "news"]
---

${item.contentSnippet || ''}
`;

    await fs.writeFile(filepath, content);
    console.log(`✅ Created: ${filename}`);
  }
}

main().catch(err => {
  console.error("❌ Error running fetch-news.js:", err);
  process.exit(1);
});
