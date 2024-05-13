const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  let body = '';
  console.log('reqUrl:', req.url);
  // true表示自动解析querystring成对象
  const reqUrl = url.parse(req.url, true);
  console.log('reqUrl', reqUrl);
  const query = reqUrl.query;
  console.log('query:', query);
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
