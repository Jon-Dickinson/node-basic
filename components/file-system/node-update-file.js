let fs = require('fs');

fs.appendFile('node-update-file.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});