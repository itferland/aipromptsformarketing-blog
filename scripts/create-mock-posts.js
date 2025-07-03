import fs from 'fs/promises';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

const mockPosts = [
  {
    title: 'The Future of AI-Powered Marketing',
    date: new Date().toISOString().split('T')[0],
    source: 'Mock Source',
    link: 'https://example.com/ai-marketing',
    description: 'Exploring how AI transforms marketing strategies.',
    tags: ['AI', 'Marketing'],
    readTime: 3,
    content: 'This is mock content about AI in marketing.'
  },
  {
    title: 'Automation Trends in 2024',
    date: new Date().toISOString().split('T')[0],
    source: 'Mock Source',
    link: 'https://example.com/automation-2024',
    description: 'Key automation trends to watch in 2024.',
    tags: ['Automation'],
    readTime: 2,
    content: 'This is mock content about automation trends.'
  },
  {
    title: 'How Machine Learning is Revolutionizing Business',
    date: new Date().toISOString().split('T')[0],
    source: 'Mock Source',
    link: 'https://example.com/ml-business',
    description: 'A look at ML-driven transformation across industries.',
    tags: ['Machine Learning', 'Business'],
    readTime: 4,
    content: 'This is mock content about machine learning in business.'
  }
];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function createPost(post) {
  await fs.mkdir(POSTS_DIR, { recursive: true });
  const filename = `${slugify(post.title)}.md`;
  const filepath = path.join(POSTS_DIR, filename);
  const frontmatter = `---\ntitle: "${post.title.replace(/"/g, '\\"')}"\ndate: "${post.date}"\nsource: "${post.source}"\nlink: "${post.link}"\ndescription: "${post.description.replace(/"/g, '\\"')}"\ntags: ${JSON.stringify(post.tags)}\nreadTime: ${post.readTime}\n---\n\n${post.content}\n`;
  await fs.writeFile(filepath, frontmatter, 'utf8');
  console.log(`Created mock post: ${filename}`);
}

async function main() {
  for (const post of mockPosts) {
    await createPost(post);
  }
  console.log('Mock posts created.');
}

main().catch(err => {
  console.error('Failed to create mock posts:', err);
  process.exit(1);
});
