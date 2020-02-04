let fs = require('fs');

fs.unlink('node-update-file.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});