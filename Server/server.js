var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello Azure');
  }).listen(1338, '127.0.0.1');	
console.log('Server running at http://127.0.0.1:1337/');
