const fs = require('fs');

// 同步方法：unlinkSync
fs.unlink('../资料/data.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('文件删除成功！');
  }
});

// 一样，且都有同步方法，但建议使用异步方法，因为异步方法可以更好的处理错误。 rmSync
fs.rm('./data.txt', (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('文件删除成功！');
});
