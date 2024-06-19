var express = require('express');
var router = express.Router();

/* 列表 */
router.get('/account', function (req, res, next) {
  res.render('list');
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
  console.log(params);
});

module.exports = router;
