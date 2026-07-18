/* Generate crawlable /projects/[slug]/ pages from the Projects <article> blocks inside index.html.
   Keeps the desktop-window experience untouched while giving Google real URLs.
   Includes Twitter Cards, og:image, and JSON-LD CreativeWork schema.

   Usage: node generate-project-pages.js
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

function fixDesktopOnlyLinks(html) {
  return html.replace(
    /href="#"\s+onclick="openSafariTo\('([^']+)'\);\s*return false;"/g,
    'href="$1" target="_blank" rel="noopener noreferrer"'
  );
}

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const sectionMatch = indexHtml.match(/<section id="projects-content"[\s\S]*?<\/section>/i);
if (!sectionMatch) {
  console.error('Could not find <section id="projects-content"> in index.html');
  process.exit(1);
}

const projectsSection = sectionMatch[0];

const articles = [...projectsSection.matchAll(/<article\s+id="([^"]+)"\s+data-window="([^"]+)"[^>]*class="project"[^>]*>[\s\S]*?<\/article>/gi)];

if (!articles.length) {
  console.error('No project <article> blocks found in projects-content section');
  process.exit(1);
}

const outRoot = path.join(__dirname, 'projects');
fs.mkdirSync(outRoot, { recursive: true });

const rows = [];

for (const m of articles) {
  const windowId = m[2];
  let slug = windowId;
  if (slug.startsWith('project-')) slug = slug.slice('project-'.length);

  const articleBlockRaw = m[0];
  const articleBlock = fixDesktopOnlyLinks(articleBlockRaw);

  const titleMatch = articleBlock.match(/<h3>([\s\S]*?)<\/h3>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : slug;

  const metaMatch = articleBlock.match(/<p[^>]*class="project__meta"[^>]*>([\s\S]*?)<\/p>/i);
  const meta = metaMatch ? stripTags(metaMatch[1]) : '';

  const ps = [...articleBlock.matchAll(/<p(?![^>]*class="project__meta")[^>]*>([\s\S]*?)<\/p>/gi)].map(x => stripTags(x[1]));
  let desc = ps[0] || '';
  if (desc.length > 170) desc = desc.slice(0, 167).trim() + '...';

  const canonical = `${SITE_ORIGIN}/projects/${slug}/`;

  const outDir = path.join(outRoot, slug);
  fs.mkdirSync(outDir, { recursive: true });

  // JSON-LD CreativeWork schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    url: canonical,
    image: OG_IMAGE,
    creator: { '@type': 'Person', name: AUTHOR_NAME, url: SITE_ORIGIN },
  };
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
  <title>${escapeHtml(title)} | Projects | Aaron Nev</title>
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
  <link rel="author" href="/llms.txt">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <link rel="stylesheet" href="/style.css">
  <style>
    body { background: #0b0b0b; color: #eaeaea; }
    .projects-shell { max-width: 900px; margin: 40px auto; padding: 0 18px 60px; }
    .projects-nav { margin-bottom: 22px; font-size: 14px; opacity: 0.85; }
    .projects-nav a { color: inherit; }
    article { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 26px 22px; }
    article h3 { margin-top: 0; }
    .project__meta { opacity: 0.75; }
  </style>
</head>
<body>
  <main class="projects-shell">
    <div class="projects-nav"><a href="/">← Home</a> · <a href="/projects/">All projects</a></div>
    ${articleBlock}
  </main>
</body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), page, 'utf8');

  rows.push({ slug, title, meta });
}

// /projects/ index
rows.sort((a, b) => a.title.localeCompare(b.title));

const listItems = rows
  .map(r => {
    const metaLine = r.meta ? ` <span style="opacity:0.65">(${escapeHtml(r.meta)})</span>` : '';
    return `  <li><a href="/projects/${r.slug}/">${escapeHtml(r.title)}</a>${metaLine}</li>`;
  })
  .join('\n');

const projectsIndex = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${ADSENSE_SCRIPT_TAG}
  <title>Projects | Aaron Nev</title>
  <meta name="description" content="Creative and technology projects by Aaron Nev, from Struthless Studios to Crossover and Rosetta.">
  <link rel="canonical" href="${SITE_ORIGIN}/projects/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Projects | Aaron Nev">
  <meta property="og:url" content="${SITE_ORIGIN}/projects/">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="${TWITTER_HANDLE}">
  <meta name="twitter:title" content="Projects | Aaron Nev">
  <meta name="twitter:image" content="${OG_IMAGE}">
  <link rel="stylesheet" href="/style.css">
  <style>
    body { background: #0b0b0b; color: #eaeaea; }
    .projects-shell { max-width: 900px; margin: 40px auto; padding: 0 18px 60px; }
    a { color: inherit; }
    ul { line-height: 1.8; }
  </style>
</head>
<body>
  <main class="projects-shell">
    <h1>Projects</h1>
    <p>Creative and technology projects that also live inside the <a href="/">desktop experience</a>.</p>
    <ul>
${listItems}
    </ul>
    <p><a href="/">← Back to the desktop</a></p>
  </main>
</body>
</html>`;

fs.writeFileSync(path.join(outRoot, 'index.html'), projectsIndex, 'utf8');

console.log('Generated project pages:', rows.length);
