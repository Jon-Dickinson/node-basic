let fs = require('fs');

fs.rename('mynewfile.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});