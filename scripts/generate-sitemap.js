const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.aisolutionsconsulting.net';

function toKebab(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

function getPages() {
  const pagesDir = path.join(__dirname, '../src/pages');
  return fs.readdirSync(pagesDir)
    .filter(f => f.endsWith('.tsx'))
    .map(f => {
      const name = f.replace(/\.tsx$/, '');
      if (name === 'Home') return '/';
      return '/' + toKebab(name);
    });
}

const pages = getPages();

const urls = pages.map(p => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n  </url>`).join('\n');

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>\n`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml.trim() + '\n');

const robotsPath = path.join(publicDir, 'robots.txt');
let robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : 'User-agent: *\nAllow: /\n';
if (!/Sitemap:/i.test(robots)) {
  robots += (robots.endsWith('\n') ? '' : '\n') + `Sitemap: ${BASE_URL}/sitemap.xml\n`;
} else {
  robots = robots.replace(/Sitemap:.*/i, `Sitemap: ${BASE_URL}/sitemap.xml`);
}
fs.writeFileSync(robotsPath, robots.trim() + '\n');

console.log('Generated sitemap.xml and updated robots.txt');
