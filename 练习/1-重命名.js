const fs = require('fs');

const files = fs.readdirSync('./http');
console.log(files);

files.forEach((file) => {
  const [index, name] = file.split('-');
  console.log(index, name);
  if (Number(index) < 10) {
    const newFileName = `0${index}-${name}`;
    fs.renameSync(`./http/${file}`, `./http/${newFileName}`);
  }
});
