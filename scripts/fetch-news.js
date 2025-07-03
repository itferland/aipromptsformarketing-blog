import fs from 'fs/promises';
import path from 'path';
import Parser from 'rss-parser';
import { createHash } from 'crypto';

const parser = new Parser({
  customFields: {
    item: ['description', 'content:encoded', 'summary']
  }
});

const RSS_SOURCES = [
  { url: 'https://rss.cnn.com/rss/edition.rss', name: 'CNN Tech', category: 'Technology' },
  { url: 'https://feeds.feedburner.com/TechCrunch', name: 'TechCrunch', category: 'Technology' },
  { url: 'https://www.wired.com/feed/rss', name: 'Wired', category: 'Technology' },
  { url: 'https://feeds.arstechnica.com/arstechnica/index', name: 'Ars Technica', category: 'Technology' },
  { url: 'https://rss.slashdot.org/Slashdot/slashdotMain', name: 'Slashdot', category: 'Technology' },
  { url: 'https://feeds.feedburner.com/venturebeat/SZYF', name: 'VentureBeat', category: 'Technology' }
];

const RELEVANT_KEYWORDS = [
  'artificial intelligence', 'machine learning', 'automation', 'AI',
  'deep learning', 'neural networks', 'chatbot', 'LLM', 'GPT',
  'workflow automation', 'business automation', 'process automation',
  'digital transformation', 'smart systems', 'intelligent systems'
];

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const generateHash = (content) => {
  return createHash('md5').update(content).digest('hex').substring(0, 8);
};

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const extractDescription = (content) => {
  if (!content) return '';
  const plainText = content.replace(/<[^>]*>/g, '');
  return plainText.length > 160 ? plainText.substring(0, 157) + '...' : plainText;
};

const isRelevant = (title, description) => {
  const text = `${title} ${description}`.toLowerCase();
  return RELEVANT_KEYWORDS.some(k => text.includes(k.toLowerCase()));
};

const extractTags = (title, description, category) => {
  const text = `${title} ${description}`.toLowerCase();
  const tags = [category];
  const tagKeywords = {
    'Machine Learning': ['machine learning', 'ml', 'deep learning'],
    'Automation': ['automation', 'workflow', 'process'],
    'ChatGPT': ['chatgpt', 'gpt', 'openai'],
    'Business': ['business', 'enterprise', 'corporate'],
    'Innovation': ['innovation', 'breakthrough', 'advancement'],
    'Research': ['research', 'study', 'academic']
  };
  Object.entries(tagKeywords).forEach(([tag, keywords]) => {
    if (keywords.some(keyword => text.includes(keyword))) {
      tags.push(tag);
    }
  });
  return [...new Set(tags)];
};

const createMarkdownFile = async (post) => {
  const slug = `${slugify(post.title)}-${generateHash(post.title)}`;
  const filename = `${slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);
  try {
    await fs.access(filepath);
    console.log(`⚠️  Post already exists: ${filename}`);
    return false;
  } catch {
    // continue
  }
  const frontmatter = `---\ntitle: "${post.title.replace(/"/g, '\\"')}"\ndate: "${post.date}"\nsource: "${post.source}"\nlink: "${post.link}"\ndescription: "${post.description.replace(/"/g, '\\"')}"\ntags: ${JSON.stringify(post.tags)}\nreadTime: ${post.readTime}\nauthor: "${post.author || 'AI Solutions Consulting'}"\n---\n\n${post.content}\n\n---\n\n*Originally published on [${post.source}](${post.link})*\n`;
  await fs.writeFile(filepath, frontmatter, 'utf8');
  console.log(`✅ Created: ${filename}`);
  return true;
};

const fetchFromSource = async (source) => {
  try {
    console.log(`🔄 Fetching from ${source.name}...`);
    const feed = await parser.parseURL(source.url);
    const posts = feed.items
      .filter(item => item.title && item.link)
      .filter(item => isRelevant(item.title, item.description || item.summary || ''))
      .slice(0, 3)
      .map(item => {
        const content = item['content:encoded'] || item.description || item.summary || '';
        const description = extractDescription(content);
        return {
          title: item.title,
          date: new Date(item.pubDate || item.isoDate || Date.now()).toISOString().split('T')[0],
          source: source.name,
          link: item.link,
          description,
          content: content.length > 500 ? content : `${description}\n\n[Read the full article here](${item.link})`,
          tags: extractTags(item.title, description, source.category),
          readTime: calculateReadingTime(content),
          author: item.creator || item.author || source.name
        };
      });
    console.log(`📄 Found ${posts.length} relevant posts from ${source.name}`);
    return posts;
  } catch (error) {
    console.error(`❌ Error fetching from ${source.name}:`, error.message);
    return [];
  }
};

const cleanupOldPosts = async (maxPosts = 100) => {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    if (mdFiles.length > maxPosts) {
      const filesWithStats = await Promise.all(
        mdFiles.map(async (file) => ({ name: file, stat: await fs.stat(path.join(POSTS_DIR, file)) }))
      );
      filesWithStats
        .sort((a, b) => a.stat.birthtime - b.stat.birthtime)
        .slice(0, mdFiles.length - maxPosts)
        .forEach(async (file) => {
          await fs.unlink(path.join(POSTS_DIR, file.name));
          console.log(`🗑️  Removed old post: ${file.name}`);
        });
    }
  } catch (error) {
    console.error('❌ Error cleaning up old posts:', error.message);
  }
};

const main = async () => {
  try {
    console.log('🚀 Starting automated blog post fetch...');
    await fs.mkdir(POSTS_DIR, { recursive: true });
    const allPosts = [];
    for (const source of RSS_SOURCES) {
      const posts = await fetchFromSource(source);
      allPosts.push(...posts);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
    let createdCount = 0;
    for (const post of sortedPosts) {
      const created = await createMarkdownFile(post);
      if (created) createdCount++;
    }
    await cleanupOldPosts(100);
    console.log(`✅ Process complete! Created ${createdCount} new posts.`);
    process.exit(createdCount > 0 ? 0 : 1);
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled Rejection:', error.message);
  process.exit(1);
});

main();
