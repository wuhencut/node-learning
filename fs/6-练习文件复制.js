const fs = require('fs');
const process = require('process');

// 第一种 readFile 方法
// 缺点：需要整个文件大小的内存大小来读取和写入文件，不适合大文件
// 读取文件
const data = fs.readFileSync('../资料/映兔视频.mp4');

// 写入文件
fs.writeFileSync('../资料/映兔视频-2.mp4', data);
// console.log(process.memoryUsage());

// 第二种 流式 方法
// 有点：chunk大小是64kb，适合大文件
// 读取文件
const rs = fs.createReadStream('../资料/映兔视频.mp4');

// 写入文件
const ws = fs.createWriteStream('../资料/映兔视频-3.mp4');

rs.on('data', (chunk) => {
  ws.write(chunk);
});

rs.on('end', () => {
  // 实际上内存占用了一半，为什么？因为在硬盘的读写中，读取的速度是要比写入的速度快很多的，所以在未写入完成的情况下，不断的读取也会占用内存，但是总体肯定是比readFilSync小的
  console.log(process.memoryUsage());
});

// 第三种，更快捷的语法糖
// 读取文件
// const rs = fs.createReadStream('../资料/映兔视频.mp4');

// // 写入文件
// const ws = fs.createWriteStream('../资料/映兔视频-3.mp4');

// rs.pipe(ws);
