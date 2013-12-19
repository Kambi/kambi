var http = require('http');
var port = proccess.env.PORT || 1337
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Azure');
  }).listen(port);	
console.log('Server running at http://127.0.0.1:1337/');
