const fs = require('fs');

const ws = fs.createWriteStream('.观书有感.txt');

ws.write('半亩方塘一鉴开\n');
ws.write('天光云影共徘徊\n');
ws.write('温情那得清如许\n');
ws.write('为有源头活水来\n');

// ws.end(); // 结束写入 可选可不选，在ws结束书写后，会自动关闭文件流
