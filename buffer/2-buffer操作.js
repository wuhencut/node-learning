// let buf_4 = Buffer.from([105, 108]);
// utf-8 格式
// console.log(buf_4.toString());

// let buf = Buffer.from('hello world');
// // 十进制
// // console.log(buf[0]);
// // 二进制 跟上面的toString不一样，所属对象不同，方法名一样但是作用不一样
// console.log(buf[0].toString(2));
// console.log(buf);
// // 更改buf
// buf[0] = 95;
// console.log(buf);
// // 转字符串
// console.log(buf.toString());

// 溢出
// let buf = Buffer.from('hello world');
// buf[0] = 361; // node会舍弃高位数字，取剩下的后8位 0001 0110 1001
// 取后8位转成十六进制：69  十进制： 105

// 中文 utf-8下的中文占用三个字节
let buf = Buffer.from('你好');
console.log(buf);
