import fs from 'fs/promises';
import path from 'path';



const mockPosts = [
  {
    title: 'The Future of AI-Powered Marketing',

    content: 'This is mock content about AI in marketing.'
  },
  {
    title: 'Automation Trends in 2024',

    content: 'This is mock content about automation trends.'
  },
  {
    title: 'How Machine Learning is Revolutionizing Business',

    content: 'This is mock content about machine learning in business.'
  }
];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function createPost(post) {
  await fs.mkdir(POSTS_DIR, { recursive: true });
  const filename = `${slugify(post.title)}.md`;
  const filepath = path.join(POSTS_DIR, filename);

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
