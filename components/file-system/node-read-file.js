let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('document.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
