const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  // chunk是buffer，通过字符串的拼接能自动转成字符串
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    // get请求一般没有请求体，所以body为空
    // 走post请求
    console.log('请求体数据:', body);
    res.end('Hello, World!');
  });
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
