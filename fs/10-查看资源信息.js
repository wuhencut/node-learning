const fs = require('fs');

// 查看文件信息
fs.stat('../资料/映兔视频.mp4', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    // 判断是否文件夹
    console.log(data.isDirectory());
    // 判断是否文件
    console.log(data.isFile());
  }
});

/**
  atime: 2024-04-22T16:52:57.865Z, // 最近访问时间
  mtime: 2024-04-22T15:40:15.685Z, // 最近修改时间
  ctime: 2024-04-22T15:40:15.687Z, // 时间更改文件状态的时间、创建时间，重命名
  birthtime: 2024-04-22T15:40:15.583Z // 文件创建时间
 */
