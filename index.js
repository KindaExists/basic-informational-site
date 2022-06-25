#!/usr/bin/env node

const http = require('http');
const fs = require('fs/promises');
const url = require('url'); // 'node:url' module does not work properly

const port = process.env.PORT || 3000;

async function injectHtml (res, htmlFilePath) {
  try {
    const data = await fs.readFile(htmlFilePath, { encoding: 'utf8'});
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  } catch (err) {
    console.error(err);
  }
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const reqUrl = new url.URL(req.url, `http://${req.headers.host}`);
  const path = reqUrl.pathname;
  if (reqUrl.pathname === '/') {
    injectHtml(res, './index.html');
  } else if (reqUrl.pathname === '/about') {
    injectHtml(res, './about.html');
  } else if (reqUrl.pathname === '/contact') {
    injectHtml(res, './contact-me.html');
  } else {
    injectHtml(res, './404.html');
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});