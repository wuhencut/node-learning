const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 当前文件目录
  const root = __dirname;
  // 取父级
  // const root = __dirname + '/../';

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const filePath = decodeURIComponent(`${root}${pathname}`);
  console.log(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
