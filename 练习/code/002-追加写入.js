const fs = require('fs');
// fs.appendFile(
//   './座右铭.txt',
//   '\r\n择其善者而从之，其不善者而改之。',
//   (error) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('写入成功');
//     }
//   }
// );

// 这也可以追加写入
fs.writeFile(
  './座右铭.txt',
  '\r\n择其善者而从之，其不善者而改之。',
  { flag: 'a' },
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('写入成功');
    }
  }
);
