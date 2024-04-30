const fs = require('fs');

// 在fs文件夹下能按照预期写在fs文件夹下。
// 命令行在根目录，那就会写在根目录下，跟运行命令行的文件夹有关
// 跟this 一样，谁调用就属于谁
// fs.writeFile('./index.html', 'Hello Node.js', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件写入成功！');
//   }
// });

fs.writeFile(__dirname + '/index.html', 'Hello Node.js', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件写入成功！');
  }
});

// 当前文件所在的文件目录的绝对路径，__dirname，可以理解为“全局变量”
console.log(__dirname);
// 当前文件的绝对路径，__dirname，可以理解为“全局变量”
console.log(__filename);
