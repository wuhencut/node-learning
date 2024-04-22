const fs = require('fs');

// Array(10)
//   .fill(0)
//   .forEach((_, index) => {
//     fs.writeFileSync(`./测试${index}.txt`, `${index}-文件`, (error) => {
//       console.log('error', error);
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('写入成功' + index);
//       }
//     });
//   });

fs.writeFile('./座右铭.txt', '三人行则必有我师', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('写入成功');
  }
});
