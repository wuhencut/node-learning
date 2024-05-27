// 引入express
const express = require('express');
const { singers } = require('./lib/singers.json');

// 创建一个express应用
const app = express();

console.log(singers);

// 路由
app.get('/singer/:id.html', (req, res) => {
  const _id = req.params.id; // 获取动态路由参数
});

// 托底，任意路径都返回404
app.all('*', (req, res) => {
  res.status(404).end('Not Found');
});

// 监听端口
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
