const http = require('http');
// const url = require('url');

const server = http.createServer((req, res) => {
  const { method, headers } = req;
  const { host } = headers;
  console.log('host', host);
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  const { pathname } = new URL(req.url, `http://${host}`);
  if (method === 'GET' && pathname === '/login') {
    res.end('登录页面');
  } else if (method === 'GET' && pathname === '/reg') {
    res.end('注册页面');
  } else {
    res.end('404 Not Found');
  }
  // console.log('headers', headers);
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
