import fs from 'fs/promises';
import path from 'path';

const testBasicFunctionality = () => {
  console.log('🧪 Testing basic functionality...');
  const testData = {
    title: 'Test AI Article',
    pubDate: new Date().toISOString(),
    author: 'Test Source',
    source: 'Test Source',
    sourceUrl: 'https://example.com/test',
    description: 'This is a test article about artificial intelligence and automation.',
    tags: ['AI', 'Test'],
    content: 'This is test content for the blog automation system.'
  };
  console.log('✅ Test data created:', testData);
  return testData;
};

const testFileOperations = async () => {
  console.log('🧪 Testing file operations...');
  const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');
  try {
    await fs.mkdir(POSTS_DIR, { recursive: true });
    console.log('✅ Posts directory created/verified');
    const testContent = `---\ntitle: \"Test Post\"\ndescription: \"Test description\"\npubDate: \"${new Date().toISOString()}\"\nauthor: \"Test\"\nsource: \"Test\"\nsourceUrl: \"https://example.com\"\ntags: [\"Test\"]\n---\n\nThis is a test post to verify the automation system works correctly.\n`;
    const testFile = path.join(POSTS_DIR, 'test-post.md');
    await fs.writeFile(testFile, testContent, 'utf8');
    console.log('✅ Test file created');
    await fs.readFile(testFile, 'utf8');
    console.log('✅ Test file read successfully');
    await fs.unlink(testFile);
    console.log('✅ Test file cleaned up');
    return true;
  } catch (error) {
    console.error('❌ File operations failed:', error.message);
    return false;
  }
};

const testNetworkConnectivity = async () => {
  console.log('🧪 Testing network connectivity...');
  const testFeeds = [
    'https://rss.cnn.com/rss/edition.rss',
    'https://feeds.feedburner.com/TechCrunch'
  ];
  for (const feed of testFeeds) {
    try {
      console.log(`Testing: ${feed}`);
      if (typeof fetch !== 'undefined') {
        const response = await fetch(feed);
        if (response.ok) {
          console.log(`✅ ${feed} - accessible`);
        } else {
          console.log(`⚠️  ${feed} - returned ${response.status}`);
        }
      } else {
        console.log('ℹ️  Fetch not available, skipping network test');
        break;
      }
    } catch (error) {
      console.log(`❌ ${feed} - ${error.message}`);
    }
  }
};

const main = async () => {
  console.log('🚀 Starting test suite...\n');
  testBasicFunctionality();
  console.log('');
  const fileTest = await testFileOperations();
  console.log('');
  await testNetworkConnectivity();
  console.log('');
  console.log('📊 Test Summary:');
  console.log(`File Operations: ${fileTest ? '✅ PASS' : '❌ FAIL'}`);
  console.log('');
  if (fileTest) {
    console.log('✅ Core functionality is working!');
    console.log('Next steps:');
    console.log('1. Run the full script: node scripts/fetch-news.js');
  } else {
    console.log('❌ Issues detected. Check file permissions and directory structure.');
  }
};

main().catch(error => {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
});
