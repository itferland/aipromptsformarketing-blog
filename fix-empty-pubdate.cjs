const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = 'src/content/posts';

function parseToISO(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    return date.toISOString().split('T')[0];
  }
  return null;
}

if (fs.existsSync(postsDir)) {
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(postsDir, file));
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const parsed = matter(content);
    let { data: frontmatter, content: body } = parsed;
    let hasChanges = false;

    // Check pubDate
    let pubDate = frontmatter.pubDate;
    let validPubDate = false;
    if (typeof pubDate === 'string' && pubDate.trim() !== '') {
      const d = new Date(pubDate);
      validPubDate = !isNaN(d.getTime());
    } else if (pubDate instanceof Date && !isNaN(pubDate.getTime())) {
      validPubDate = true;
    }

    if (!validPubDate) {
      // Try to use 'date' field
      const iso = parseToISO(frontmatter.date);
      if (iso) {
        frontmatter.pubDate = iso;
        hasChanges = true;
        console.log(`✅ Fixed pubDate in ${path.basename(file)}: set to ${iso}`);
      } else {
        // fallback: today
        frontmatter.pubDate = new Date().toISOString().split('T')[0];
        hasChanges = true;
        console.log(`⚠️  Set pubDate to today in ${path.basename(file)}`);
      }
    }

    if (hasChanges) {
      fs.copyFileSync(file, `${file}.backup`);
      // Write new frontmatter (unquoted pubDate)
      let newFrontmatter = { ...frontmatter };
      // Remove quotes from pubDate if present
      if (typeof newFrontmatter.pubDate === 'string') {
        newFrontmatter.pubDate = newFrontmatter.pubDate.replace(/^"|"$/g, '');
      }
      // Use gray-matter to write, then fix pubDate quoting
      let newContent = matter.stringify(body, newFrontmatter);
      newContent = newContent.replace(/^pubDate:\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})"?/m, 'pubDate: $1');
      fs.writeFileSync(file, newContent, 'utf8');
    }
  });
}
console.log('🎉 pubDate fixes complete! Try running npm run build again.'); 