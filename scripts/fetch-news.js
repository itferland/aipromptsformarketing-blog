<<<<<<< HEAD
// scripts/fetch-news.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';
import matter from 'gray-matter';

// Node v18+ native fetch fallback
const fetch = global.fetch || (await import('node-fetch')).default;

// ====== CONFIGURATION ======
const FIRECRAWL_API_KEY = 'fc-2395cafc954c40ddbc0ce0a88e3b5df7';
const FEED_URLS = [
  'https://feeds.arstechnica.com/arstechnica/technology-lab',
  'https://www.theverge.com/rss/index.xml'
];
// ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.resolve(__dirname, '../src/posts/');
// ===========================

// Safely quote a YAML string (double quoted, escapes internal quotes)
function yamlQuote(str) {
  return `"${String(str).replace(/"/g, '\\"')}"`;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Clean up content: strips typical "Read more" and footers
function cleanContent(content) {
  if (!content) return '';
  return content
    .replace(/(Read more|Read More|Continue reading|Continue Reading|View full story).*$/gmi, '')
    .replace(/[\r\n]{3,}/g, '\n\n')
    .trim();
}

async function firecrawlToMarkdown(url) {
  const res = await fetch('https://api.firecrawl.dev/v1/sync/webpage/extract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': FIRECRAWL_API_KEY
    },
    body: JSON.stringify({ url, extractType: "markdown" })
  });
  if (!res.ok) throw new Error(`Firecrawl error: ${res.statusText}`);
  const data = await res.json();
  return data.markdown || null;
}

(async () => {
  const parser = new Parser();
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });

  for (const feedUrl of FEED_URLS) {
    console.log(`Fetching: ${feedUrl}`);
    const feed = await parser.parseURL(feedUrl);
    for (const entry of feed.items) {
      const slug = slugify(entry.title || entry.link);
      const filePath = path.join(POSTS_DIR, slug + ".md");
      if (fs.existsSync(filePath)) continue; // Skip if file exists
      try {
        let markdown = null;
        try {
          markdown = await firecrawlToMarkdown(entry.link);
        } catch (err) {
          // Firecrawl failed; fallback to RSS summary
        }
        // Fallback to summary if no Markdown from Firecrawl
        if (!markdown) {
          markdown = `> **Note:** Only RSS summary available for this post.\n\n` + cleanContent(entry.contentSnippet || entry.content || entry.summary || '');
        }
        const frontmatter = [
          '---',
          `title: ${yamlQuote(entry.title || '')}`,
          `link: ${yamlQuote(entry.link || '')}`,
          `date: ${yamlQuote(entry.pubDate || new Date().toISOString())}`,
          `source: ${yamlQuote(feed.title || '')}`,
          '---'
        ].join('\n');
        fs.writeFileSync(filePath, `${frontmatter}\n\n${markdown.trim()}\n`, "utf8");
        console.log(`Saved: ${filePath}`);
      } catch (err) {
        console.error(`Failed on ${entry.link}:`, err.message);
      }
    }
  }
})();
=======
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: { country: 'us', apiKey: process.env.NEWS_API_KEY },
        });
        const news = response.data;
        const outputDir = path.join(__dirname, '../src/posts');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(path.join(outputDir, 'news.json'), JSON.stringify(news, null, 2));
        console.log('News fetched successfully!');
    } catch (error) {
        console.error('Error fetching news:', error.message);
        process.exit(1);
    }
}

fetchNews();
>>>>>>> origin/main
