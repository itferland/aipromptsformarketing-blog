const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.aisolutionsconsulting.net';
const pages = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/prompt-library',
  '/tools',
];

const urls = pages.map(p => {
  return `  <url>\n    <loc>${BASE_URL}${p}</loc>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
`${urls}\n` +
`</urlset>\n`;

const outputDir = path.join(__dirname, '../public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), xml.trim() + '\n');
console.log('Sitemap generated at', path.join(outputDir, 'sitemap.xml'));
