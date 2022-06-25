#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.statusCode = 200;

  console.log(url);
  if (url === '/') {
    fs.readFile('./index.html', { encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  } else if (url === '/about') {
    fs.readFile('./about.html', { encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  } else if (url === '/contact') {
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