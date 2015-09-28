var http = require('http');
var fs = require('fs');
var io = require('socket.io')(http);

var page = null;
fs.readFile('./index.html', function (err, data) {
  page = data;
});

var server = http.createServer(function (req, res) {
  res.end(page);
});

server.listen(3000);
