const express = require('express');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const app = express();

// 全局中间件
const recordMiddleware = (req, res, next) => {
  const { url, ip } = req;
  // 持续写入
  fs.appendFileSync(
    path.resolve(__dirname, './access.log'),
    `${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')} ${ip} ${url}\n`
  );

  next();
};

app.use(recordMiddleware);

// 路由
app.get('/home', (req, res) => {
  res.send('首页');
});

app.get('/about', (req, res) => {
  res.send('关于我们');
});

app.all('*', (req, res) => {
  res.status(404).send('页面未找到');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
