const fs = require('fs');

const files = fs.readdirSync('./code');
console.log(files);

files.forEach((file) => {
  const [index, name] = file.split('-');
  console.log(index, name);
  if (Number(index) < 10) {
    const newFileName = `0${index}-${name}`;
    fs.renameSync(`./code/${file}`, `./code/${newFileName}`);
  }
});
