// 引入express
const express = require('express');

// 创建一个express应用
const app = express();

// 路由
app.get('/home', (req, res) => {
  // 获取请求参数
  console.log('req.method', req.method);
  // 路径 + query
  console.log('req.url', req.url);
  console.log('req.httpVersion', req.httpVersion);
  console.log('req.header', req.headers);

  // express 操作
  // 路径
  console.log('req.path', req.path);
  // 路由带的请求参数
  console.log('req.query', req.query);

  // 会返回::1 ，代表localhost
  console.log('req.ip', req.ip);

  console.log('req.get()', req.get('host'));

  res.end('Hello Express!');
});

app.get('/', (req, res) => {
  // res.end('Home')
  res.redirect('/home');
});

app.post('/login', (req, res) => {
  res.end('Login success!');
  // const { username, password } = req.body;
  // if (username === 'admin' && password === '123456') {
  //   res.end('Login success!');
  // } else {
  //   res.end('Login failed!');
  // }
});

// all 任意方法
app.all('/test', (_, res) => {
  res.end('This is a all!');
});

// 托底，任意路径都返回404
app.all('*', (req, res) => {
  res.status(404).end('Not Found');
});

// 监听端口
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
