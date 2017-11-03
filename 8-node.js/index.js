var fs = require('file-system');
var dir = './src';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

fs.writeFile('src/mynewfile.txt', new Date().toLocaleString(), function (err) {
  if (err) throw err;
});

