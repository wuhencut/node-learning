var express = require('express');
var router = express.Router();

const { formidable } = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/** 显示网页的(表单的)，提交头像文件 */
router.get('/portrait', function (req, res, next) {
  //直接渲染模板内容
  res.render('portrait');
});

/** 处理文件上传 */
router.post('/portrait', function (req, res, next) {
  console.log('req', req);
  // 创建表单对象
  const form = formidable({
    multiples: true,
    // 设置文件上传路径，这个文件路径必须真实存在
    uploadDir: __dirname + '/../public/images',
    // 设置文件保留后缀
    keepExtensions: true,
  });

  // const form = new formidable.IncomingForm({ multiples: true });

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log('fields', fields);
    console.log('files', files);
    // 服务器保存文件的访问url
    // newFileName 是服务器保存的文件名，为了防止文件名重复，所以在保存时会自动加上随机字符串
    // 将来讲次url保存在数据库中
    const url = '/images/' + files.portrait.newFilename;
    res.send(url);
  });
});

module.exports = router;
