const path = require('path');

// 因为在windows和linux系统下，__dirname的路径分隔符不同，所以需要使用path模块来处理路径
// windows是\，linux是/，包括mac os也是/，所以需要使用path模块来处理路径
// console.log(__dirname + '/index.html');

// ------------

/**
 * resolve 正确的写法  解决不同系统间文件夹分隔符不同的问题
 * 第一个参数是绝对路径，第二个参数是相对路径，如果第二个参数用绝对路径，则会覆盖第一个参数
 * 所以这里的第二个参数是相对路径，所以会自动拼接上第一个参数
 */
// console.log(path.resolve(__dirname, '/index.html'));

// ------------
/**
 * sep: 分隔符，windows下是\，linux下是/，mac os下是/
 */

// console.log(path.sep);

// ------------------------------

/**
 * parse 解析路径，返回一个对象，包含了路径的各个部分
 */
// console.log(__filename);
const _path = '/Users/st/Documents/Private/node-learning/path/1.js';
// console.log(path.parse(_path));

/**
 * basename 返回路径的最后一部分，比如：文件名
 */
// console.log(path.basename(_path));

/**
 * dirname 返回文件的目录部分，比如：路径的上一级目录
 */
// console.log(path.dirname(_path));

/**
 * extname 返回文件的扩展名，比如：.js
 */
console.log(path.extname(_path));
