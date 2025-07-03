const fs = require('fs');
const path = require('path');

const postsDir = 'src/content/posts';

if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(postsDir, file));
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    // Remove single or double quotes from pubDate
    content = content.replace(/^pubDate:\s*['"]([0-9]{4}-[0-9]{2}-[0-9]{2})['"]/m, (match, dateStr) => {
      hasChanges = true;
      return `pubDate: ${dateStr}`;
    });
    if (hasChanges) {
      fs.copyFileSync(file, `${file}.backup`);
      fs.writeFileSync(file, content, 'utf8');
      console.log('✅ Unquoted pubDate in', path.basename(file));
    }
  });
}
console.log('🎉 pubDate unquoting complete! Try running npm run build again.'); 