let fs = require('fs');

fs.writeFile('node-create-file.txt', 'content here', function (err) {
  if (err) throw err;
  console.log('Saved!');
});