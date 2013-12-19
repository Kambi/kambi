var http = require('http');

exports.start = function() {
var port = process.env.PORT || 1338
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Thambi.. Welcome to Kambi');
  }).listen(port);	

	console.log('Server running at http://127.0.0.1:' + port + '/');
}
