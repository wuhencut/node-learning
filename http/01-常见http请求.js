const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8');
  res.end('Hello World!！！！');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
