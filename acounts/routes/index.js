var express = require('express');
var router = express.Router();

/* 列表 */
router.get('/account', function (req, res, next) {
  res.render('list');
});

/** 创建记录 */
router.get('/account/create', function (req, res, next) {
  // res.send('create account');
  res.render('create');
});

module.exports = router;
