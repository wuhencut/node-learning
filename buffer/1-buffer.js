// 1. alloc
let buf = Buffer.alloc(10);
// console.log(buf);

// 2. allocUnsafe 对内存中的旧数据不会二进制归零
// 用unsafe会比alloc快
let buf_2 = Buffer.allocUnsafe(100);
// console.log(buf_2);

// 3. 转成buffer
// 把文字转成在unicode中对应的数字
let buf_3 = Buffer.from('adong');
// 转数组
// 为什么里面的英文变成00了？
let buf_4 = Buffer.from(['buffer']);
console.log(buf_4);
