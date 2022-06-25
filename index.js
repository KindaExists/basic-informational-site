#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const url = require('url');
// 'node:url' module does not work properly

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const reqUrl = new url.URL(req.url, `http://${req.headers.host}`);
  res.statusCode = 200;

  if (reqUrl.pathname === '/') {
    fs.readFile('./index.html', { encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  } else if (reqUrl.pathname === '/about') {
    fs.readFile('./about.html', { encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  } else if (reqUrl.pathname === '/contact') {
    fs.readFile('./contact-me.html', { encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('./404.html', { encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});