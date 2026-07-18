const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const clientId = 'ca-pub-4942055470281348';
const snippetSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), 'utf8');
}

test('homepage includes the AdSense verification snippet', () => {
  const html = read('index.html');
  assert.match(html, new RegExp(snippetSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(html, /crossorigin="anonymous"/);
});

test('page generators include the AdSense verification snippet', () => {
  const writingGenerator = read('generate-writing-pages.js');
  const projectGenerator = read('generate-project-pages.js');

  assert.match(writingGenerator, new RegExp(clientId));
  assert.match(projectGenerator, new RegExp(clientId));
  assert.match(writingGenerator, /adsbygoogle/);
  assert.match(projectGenerator, /adsbygoogle/);
});
