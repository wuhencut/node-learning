const http = require('http');
// const url = require('url');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log('url', url);
  console.log(url.searchParams.get('k'));
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
