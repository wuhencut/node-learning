var express = require('express');
var router = express.Router();
// 导入shortid模块
const shortid = require('shortid');
// 导入lowdb
const low = require('lowdb');
// 导入文件系统模块
const FileSync = require('lowdb/adapters/FileSync');
// 实例化适配器
const adapters = new FileSync(__dirname + '/../data/db.json');
// 实例化数据库
const db = low(adapters);

/* 列表 */
router.get('/account', function (req, res, next) {
  // 获取所有账单信息
  const accounts = db.get('accounts').value();
  console.log('accounts', accounts);
  res.render('list', { accounts });
});

/** 创建记录页面 */
router.get('/account/create', function (req, res, next) {
  // res.send('create account');

  res.render('create');
});

/** 创建新表单 */
router.post('/account', function (req, res, next) {
  // 原生node下不能这么轻易拿到body，在app.js中已经用了中间件来处理了
  const params = req.body;
  console.log('params', params);
  // 保存到数据库
  console.log('db', db);
  db.get('accounts')
    // 一般最新的数据塞开头，比较好查一点
    .unshift({
      id: shortid.generate(),
      ...params,
    })
    .write();
  console.log(params);
  res.render('success', { msg: '创建成功', url: '/account' });
});

module.exports = router;
