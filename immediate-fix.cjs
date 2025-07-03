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
    content = content.replace(/^pubDate:\s*["']([^"']+)["']/gm, (match, dateStr) => {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        hasChanges = true;
        return `pubDate: ${date.toISOString().split('T')[0]}`;
      }
      return match;
    });
    content = content.replace(/^updatedDate:\s*["']([^"']+)["']/gm, (match, dateStr) => {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        hasChanges = true;
        return `updatedDate: ${date.toISOString().split('T')[0]}`;
      }
      return match;
    });
    if (hasChanges) {
      fs.copyFileSync(file, `${file}.backup`);
      fs.writeFileSync(file, content, 'utf8');
      console.log('✅ Fixed', path.basename(file));
    }
  });
}
console.log('🎉 Date format fixes complete! Try running npm run build again.'); 