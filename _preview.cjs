// Lokaler Vorschau-Server für ALLE drei Pages (Übersicht + Tierschutz + Hundetrainer)
// auf einem Port — analog GitHub Pages / Cloudflare Pages.
// Start: node _preview.cjs   →   http://localhost:4000/
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const ROOT = __dirname;
const PORT = 4000;
const LABEL = 'Hundestuben — Vorschau';

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
      res.end('<h1>404 — nicht gefunden</h1><p>' + reqPath + '</p>');
      return;
    }
    if (stats.isDirectory()) {
      if (!reqPath.endsWith('/')) {
        res.writeHead(301, { Location: reqPath + '/' });
        res.end();
        return;
      }
      const indexFile = path.join(abs, 'index.html');
      if (fs.existsSync(indexFile)) return serveFile(indexFile, res);
      res.writeHead(404); res.end('Kein index.html in ' + reqPath);
      return;
    }
    serveFile(abs, res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('---------------------------------------------------------');
  console.log('  ' + LABEL);
  console.log('---------------------------------------------------------');
  console.log('  ROOT: ' + ROOT);
  console.log('  PORT: ' + PORT);
  console.log('');
  console.log('  Übersicht:        http://localhost:' + PORT + '/');
  console.log('  Tierschutz:       http://localhost:' + PORT + '/tierschutzverein/');
  console.log('  Hundetrainer:     http://localhost:' + PORT + '/hundetrainer/');
  console.log('---------------------------------------------------------');
  console.log('  Stop: Strg+C');
});
