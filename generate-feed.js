/* Generate a simple RSS 2.0 feed for Writing pieces.

   Usage: node generate-feed.js

   Source of truth: <article id="..." data-window="..."> blocks in index.html
   We use the <h3> title and <time datetime="YYYY-MM-DD"> when available.
*/

const fs = require('fs');
const path = require('path');

const SITE_ORIGIN = 'https://aaronnev.com';
const FEED_URL = `${SITE_ORIGIN}/feed.xml`;

function stripTags(s) {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc2822(dateStr) {
  // dateStr: YYYY-MM-DD
  // Use noon UTC to avoid timezone date rollover.
  const d = new Date(`${dateStr}T12:00:00Z`);
  if (isNaN(d.getTime())) return null;
  return d.toUTCString();
}

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const ids = [...indexHtml.matchAll(/<article id=\"([^\"]+)\" data-window=\"\1\">/g)].map(m => m[1]);
if (!ids.length) {
  console.error('No article blocks found in index.html');
  process.exit(1);
}

const items = [];

for (const id of ids) {
  const re = new RegExp(`<article id=\\"${id}\\"[\\s\\S]*?<\\/article>`, 'i');
  const match = indexHtml.match(re);
  if (!match) continue;
  const articleBlock = match[0];

  const titleMatch = articleBlock.match(/<h3>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : id;

  const timeMatch = articleBlock.match(/<time[^>]*datetime=\"([^\"]+)\"[^>]*>/i);
  const isoDate = timeMatch ? timeMatch[1] : null;
  const pubDate = isoDate ? toRfc2822(isoDate) : null;

  const firstP = (articleBlock.match(/<p>([\s\S]*?)<\/p>/i) || [])[1];
  let desc = firstP ? stripTags(firstP) : '';
  if (desc.length > 240) desc = desc.slice(0, 237).trim() + '...';

  const link = `${SITE_ORIGIN}/writing/${id}/`;

  items.push({ id, title, pubDate, desc, link, isoDate });
}

// Newest first (by isoDate if present)
items.sort((a, b) => {
  if (!a.isoDate && !b.isoDate) return 0;
  if (!a.isoDate) return 1;
  if (!b.isoDate) return -1;
  return a.isoDate < b.isoDate ? 1 : -1;
});

// Make lastBuildDate deterministic: use newest article date when available.
// This avoids pointless diffs when re-running the generator without content changes.
const lastBuildDate = (items[0] && items[0].isoDate) ? toRfc2822(items[0].isoDate) : new Date().toUTCString();

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml('Aaron Nev - Writing')}</title>
    <link>${escapeXml(SITE_ORIGIN + '/writing/')}</link>
    <description>${escapeXml('Writing by Aaron McLachlan (Nev).')}</description>
    <language>en</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    <generator>${escapeXml('generate-feed.js')}</generator>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${escapeXml(FEED_URL)}" rel="self" type="application/rss+xml" />

${items
  .map(it => {
    return `    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${escapeXml(it.link)}</link>
      <guid isPermaLink="true">${escapeXml(it.link)}</guid>
      ${it.pubDate ? `<pubDate>${escapeXml(it.pubDate)}</pubDate>` : ''}
      ${it.desc ? `<description>${escapeXml(it.desc)}</description>` : ''}
    </item>`;
  })
  .join('\n')}

  </channel>
</rss>
`;

fs.writeFileSync(path.join(__dirname, 'feed.xml'), rss, 'utf8');
console.log('Generated feed.xml with items:', items.length);
