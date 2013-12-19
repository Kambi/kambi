var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('song.html', function(err, data) {
	if(err != null)
	{
		res.end(err.message);
	}
	else
	{
		res.end(data);
	}
  });
}).listen(1337, '127.0.0.1');	
console.log('Server running at http://127.0.0.1:1337/');
