exports.myDateTime = function () {
    return Date();
};


// within the parent:

// let clock = require('./node-custom-module');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time are currently: " + clock.myDateTime());
//     res.end();
// }).listen(8080);