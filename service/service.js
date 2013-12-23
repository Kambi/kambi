var http = require('http');
var express = require('express');
var routes = require('./routes');

var app = express();

exports.start = function() {
	app.set('port', process.env.PORT || 1338);
	app.set('views', __dirname + '../views');
	app.use(express.logger('dev'));
	app.use(express.static('../app/'));
	app.use(express.bodyParser());

	app.get('/movies', routes.movies.list);

	app.listen(app.get('port'), function() {
		console.log('Express server listening on port' + app.get('port'));
		open('http://localhost:' + app.get('port') + '/')
	});
};

