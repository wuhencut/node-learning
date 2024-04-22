const fs = require('fs');

const rs = fs.createReadStream('../资料/映兔视频.mp4');

rs.on('data', (chunk) => {
  // chunk 文件块
  // console.log('chunk', chunk);
  console.log(chunk.length); // 65536  --- 一次读取的字节数 64k
  // 视频： 乱码
  // console.log(chunk.toString()); // 打印文件块内容
});
