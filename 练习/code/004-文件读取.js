const fs = require('fs');

// 异步读取 无返回结果
fs.readFile('./观书有感.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  // data: buffer
  console.log(data.toString());
});

// 同步读取 直接返回结果
const data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());
