#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const postsDir = 'src/content/posts';

// Function to normalize date format
function normalizeDateFormat(dateString) {
  // If it's already in ISO format (YYYY-MM-DD), return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return dateString;
  }
  // If it's in full ISO format, extract just the date part
  if (dateString && dateString.includes('T')) {
    return dateString.split('T')[0];
  }
  // If it's in RFC format, parse and convert
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch (error) {
    console.error(`Error parsing date: ${dateString}`);
    return '2025-01-01'; // fallback date
  }
}

// Function to clean up frontmatter
function cleanFrontmatter(content) {
  const lines = content.split('\n');
  const frontmatterStart = lines.findIndex(line => line.trim() === '---');
  const frontmatterEnd = lines.findIndex((line, index) => 
    index > frontmatterStart && line.trim() === '---'
  );
  
  if (frontmatterStart === -1 || frontmatterEnd === -1) {
    console.error('No valid frontmatter found');
    return content;
  }
  
  const frontmatterLines = lines.slice(frontmatterStart + 1, frontmatterEnd);
  const bodyLines = lines.slice(frontmatterEnd + 1);
  
  // Parse frontmatter
  const frontmatter = {};
  for (const line of frontmatterLines) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const key = match[1];
      let value = match[2];
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  }
  // Ensure required fields exist
  if (!frontmatter.title) {
    console.error('Missing title field');
    return content;
  }
  if (!frontmatter.description) {
    frontmatter.description = `${frontmatter.title} - Latest insights and analysis`;
  }
  if (!frontmatter.pubDate) {
    // Try to get date from 'date' field
    if (frontmatter.date) {
      frontmatter.pubDate = normalizeDateFormat(frontmatter.date);
    } else {
      frontmatter.pubDate = '2025-01-01'; // fallback
    }
  } else {
    // Normalize existing pubDate
    frontmatter.pubDate = normalizeDateFormat(frontmatter.pubDate);
  }
  // Ensure other fields exist
  if (!frontmatter.link) {
    frontmatter.link = 'https://example.com';
  }
  if (!frontmatter.source) {
    frontmatter.source = 'Unknown';
  }
  // Rebuild frontmatter
  const newFrontmatter = [
    '---',
    `title: "${frontmatter.title}"`,
    `description: "${frontmatter.description}"`,
    `pubDate: "${frontmatter.pubDate}"`,
    `link: "${frontmatter.link}"`,
    `date: "${frontmatter.date || frontmatter.pubDate}"`,
    `source: "${frontmatter.source}"`,
    '---'
  ];
  return [...newFrontmatter, '', ...bodyLines].join('\n');
}

// Main function
function fixAllFrontmatter() {
  console.log('🔍 Fixing frontmatter in all blog posts...\n');
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`Processing: ${file}`);
    try {
      const fixedContent = cleanFrontmatter(content);
      fs.writeFileSync(filePath, fixedContent);
      console.log(`  ✅ Updated: ${file}`);
    } catch (error) {
      console.error(`  ❌ Error processing ${file}:`, error.message);
    }
  }
  console.log('\n🎉 All done! Now run:');
  console.log('  git add .');
  console.log('  git commit -m "Fix frontmatter formatting issues"');
  console.log('  git push');
}

fixAllFrontmatter(); 