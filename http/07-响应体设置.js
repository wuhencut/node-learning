const http = require('http');
// const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');

  res.setHeader('Server', 'node-server');
  res.setHeader('test', ['a', 'b']);

  res.statusCode = 200;
  res.statusMessage = '111';

  // write可以写很多次，end只能写一次
  res.write('Hello World!');
  res.write('你好，世界！');
  // 有了write，一般end返回响应体了
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
