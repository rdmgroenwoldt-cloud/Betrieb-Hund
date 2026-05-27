// Lokaler Preview-Server NUR für die Tierschutzvereine-Landingpage.
// Root: dieses Verzeichnis.   Start: node _server.cjs   →   http://localhost:8089/
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = __dirname;
const PORT = 8089;
const LABEL = 'Tierschutzvereine & Tierheime';

const MIME = {
  '.html':'text/html; charset=utf-8','.htm':'text/html; charset=utf-8',
  '.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif',
  '.svg':'image/svg+xml','.webp':'image/webp','.ico':'image/x-icon',
  '.pdf':'application/pdf','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf',
  '.txt':'text/plain; charset=utf-8','.md':'text/markdown; charset=utf-8'
};

function safeJoin(root, reqPath) {
  const decoded = decodeURIComponent(reqPath);
  const resolved = path.normalize(path.join(root, decoded));
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function listDir(absDir, reqPath) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true })
    .filter(e => !e.name.startsWith('_') && !e.name.startsWith('.'))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
      return a.name.localeCompare(b.name, 'de');
    });
  const items = entries.map(e => {
    const name = e.name + (e.isDirectory() ? '/' : '');
    const href = encodeURIComponent(e.name) + (e.isDirectory() ? '/' : '');
    return `<li><a href="${href}">${name}</a></li>`;
  }).join('');
  return `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><title>${LABEL} — ${reqPath}</title>
<style>body{font-family:Georgia,serif;background:#FAF7F2;color:#1F1E2E;max-width:800px;margin:40px auto;padding:0 24px;line-height:1.6}
h1{color:#2D2A6B;font-weight:normal;font-size:24px;border-bottom:2px solid #B89A5C;padding-bottom:10px}
ul{list-style:none;padding:0}li{padding:6px 0;border-bottom:1px solid #E2D9C8}
a{color:#4A4290;text-decoration:none}a:hover{color:#B89A5C}
.crumb{font-size:13px;color:#6B6678;margin-bottom:18px;letter-spacing:1px;text-transform:uppercase}</style></head><body>
<div class="crumb">${LABEL} · localhost:${PORT}</div>
<h1>Verzeichnis: ${reqPath}</h1>
<ul>${reqPath !== '/' ? '<li><a href="../">../</a></li>' : ''}${items}</ul></body></html>`;
}

function serveFile(abs, res) {
  const ext = path.extname(abs).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  fs.createReadStream(abs).pipe(res);
}

const server = http.createServer((req, res) => {
  const reqPath = url.parse(req.url).pathname || '/';
  console.log(new Date().toISOString().slice(11, 19), req.method, reqPath);

  const abs = safeJoin(ROOT, reqPath);
  if (!abs) { res.writeHead(403); res.end('Forbidden'); return; }

  fs.stat(abs, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>404 — nicht gefunden</h1><p>${reqPath}</p>`);
      return;
    }
    if (stats.isDirectory()) {
      if (!reqPath.endsWith('/')) { res.writeHead(301, { Location: reqPath + '/' }); res.end(); return; }
      const indexFile = path.join(abs, 'index.html');
      if (fs.existsSync(indexFile)) return serveFile(indexFile, res);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(listDir(abs, reqPath));
      return;
    }
    serveFile(abs, res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('---------------------------------------------------------');
  console.log(`  ${LABEL} — lokaler Preview-Server`);
  console.log('---------------------------------------------------------');
  console.log(`  ROOT: ${ROOT}`);
  console.log(`  PORT: ${PORT}`);
  console.log('');
  console.log(`  Landingpage:  http://localhost:${PORT}/`);
  console.log('---------------------------------------------------------');
});
