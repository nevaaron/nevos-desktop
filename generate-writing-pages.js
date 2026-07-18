/* Generate crawlable /writing/[slug]/ pages from the <article> blocks inside index.html.
   Keeps the desktop-window experience untouched while giving Google real URLs.
   Includes Twitter Cards, og:image, and JSON-LD Article schema.

   Usage: node generate-writing-pages.js
*/

const fs = require('fs');
const path = require('path');

const SITE_ORIGIN = 'https://aaronnev.com';
const OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;
const TWITTER_HANDLE = '@nevaaron';
const AUTHOR_NAME = 'Aaron Nev';
const ADSENSE_CLIENT_ID = 'ca-pub-4942055470281348';
const ADSENSE_SCRIPT_TAG = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}" crossorigin="anonymous"></script>`;

function stripTags(s) {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const ids = [...indexHtml.matchAll(/<article id="([^"]+)" data-window="\1">/g)].map(m => m[1]);

if (!ids.length) {
  console.error('No article blocks found in index.html');
  process.exit(1);
}

for (const id of ids) {
  const re = new RegExp(`<article id="${id}"[\\s\\S]*?<\\/article>`, 'i');
  const match = indexHtml.match(re);
  if (!match) {
    console.warn('Missing article:', id);
    continue;
  }

  const articleBlock = match[0];

  const titleMatch = articleBlock.match(/<h3>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : id;

  const firstP = (articleBlock.match(/<p>([\s\S]*?)<\/p>/i) || [])[1];
  let desc = firstP ? stripTags(firstP) : '';
  if (desc.length > 170) desc = desc.slice(0, 167).trim() + '...';

  const timeMatch = articleBlock.match(/<time datetime="([^"]+)"/i);
  const datePublished = timeMatch ? timeMatch[1] : '';

  const canonical = `${SITE_ORIGIN}/writing/${id}/`;

  const outDir = path.join(__dirname, 'writing', id);
  fs.mkdirSync(outDir, { recursive: true });

  // JSON-LD Article schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    url: canonical,
    image: OG_IMAGE,
    author: { '@type': 'Person', name: AUTHOR_NAME, url: SITE_ORIGIN },
    publisher: { '@type': 'Person', name: AUTHOR_NAME, url: SITE_ORIGIN },
  };
  if (datePublished) jsonLd.datePublished = datePublished;
  if (desc) jsonLd.description = desc;

  const descMeta = desc ? `<meta name="description" content="${escapeHtml(desc)}">` : '';
  const ogDescMeta = desc ? `<meta property="og:description" content="${escapeHtml(desc)}">` : '';
  const twDescMeta = desc ? `<meta name="twitter:description" content="${escapeHtml(desc)}">` : '';

  const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${ADSENSE_SCRIPT_TAG}
  <title>${escapeHtml(title)} | Aaron Nev</title>
  ${descMeta}
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  ${ogDescMeta}
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta property="og:site_name" content="${AUTHOR_NAME}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="${TWITTER_HANDLE}">
  <meta name="twitter:creator" content="${TWITTER_HANDLE}">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  ${twDescMeta}
  <meta name="twitter:image" content="${OG_IMAGE}">
  <link rel="alternate" type="application/rss+xml" title="Aaron Nev - Writing" href="${SITE_ORIGIN}/feed.xml">
  <link rel="author" href="/llms.txt">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <link rel="stylesheet" href="/style.css">
  <style>
    body { background: #0b0b0b; color: #eaeaea; }
    .writing-shell { max-width: 820px; margin: 40px auto; padding: 0 18px 60px; }
    .writing-nav { margin-bottom: 22px; font-size: 14px; opacity: 0.85; }
    .writing-nav a { color: inherit; }
    article { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 26px 22px; }
    article h3 { margin-top: 0; }
    article time { display: inline-block; margin-bottom: 14px; opacity: 0.7; }
  </style>
</head>
<body>
  <main class="writing-shell">
    <div class="writing-nav"><a href="/">← Home</a> · <a href="/writing/">All writing</a></div>
    ${articleBlock}
  </main>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), page, 'utf8');
}

// Also generate a simple /writing/ index page.
const links = ids.map(id => `  <li><a href="/writing/${id}/">${escapeHtml(id.replace(/-/g, ' '))}</a></li>`).join('\n');

const writingIndex = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${ADSENSE_SCRIPT_TAG}
  <title>Writing | Aaron Nev</title>
  <meta name="description" content="Articles and essays by Aaron Nev on technology, crypto, creativity, and culture.">
  <link rel="canonical" href="${SITE_ORIGIN}/writing/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Writing | Aaron Nev">
  <meta property="og:url" content="${SITE_ORIGIN}/writing/">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="${TWITTER_HANDLE}">
  <meta name="twitter:title" content="Writing | Aaron Nev">
  <meta name="twitter:image" content="${OG_IMAGE}">
  <link rel="alternate" type="application/rss+xml" title="Aaron Nev - Writing" href="${SITE_ORIGIN}/feed.xml">
  <link rel="stylesheet" href="/style.css">
  <style>
    body { background: #0b0b0b; color: #eaeaea; }
    .writing-shell { max-width: 820px; margin: 40px auto; padding: 0 18px 60px; }
    a { color: inherit; }
    ul { line-height: 1.8; }
  </style>
</head>
<body>
  <main class="writing-shell">
    <h1>Writing</h1>
    <p>Articles and essays that also live inside the <a href="/">desktop experience</a>.</p>
    <ul>
${links}
    </ul>
    <p><a href="/">← Back to the desktop</a></p>
  </main>
</body>
</html>`;

fs.mkdirSync(path.join(__dirname, 'writing'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'writing', 'index.html'), writingIndex, 'utf8');

console.log('Generated writing pages:', ids.length);
