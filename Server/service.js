var http = require('http');
var express = require('express');
var routes = require('../routes');

var app = express();

exports.start = function() {

app.set('port', process.env.PORT || 1338);
app.set('views', __dirname + '/views');

app.get('/', routes.movies.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port' + app.get('port'));
});

};

// exports.start = function() {
// var port = process.env.PORT || 1338
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello Thambi.. Welcome to Kambi');
//   }).listen(port);	

// }
