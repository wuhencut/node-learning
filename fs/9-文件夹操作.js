const fs = require('fs');

// 单个文件夹创建
// fs.mkdir('./html', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件夹创建成功！');
//   }
// });

// 递归创建
// fs.mkdir('./a/b/c/d', { recursive: true }, (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('文件夹创建成功！');
//   }
// });

// 读取文件夹内容
// fs.readdir('../资料', (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });

// 删除文件夹
// fs.rmdir('./html', (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('文件夹删除成功！');
//   }
// });

// 递归删除 官方不再推荐
// fs.rmdir('./a', { recursive: true }, (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('文件夹删除成功！');
//   }
// });

// 递归删除：官方推荐
fs.rm('./a', { recursive: true }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('文件夹删除成功！');
  }
});
