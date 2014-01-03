
var request = require('request');
var linq = require('linq');
var localUri = 'http://localhost:7475/db/data/cypher';
var getMovie = function(movieName, callback) {
	var cypher = '{"query" : "MATCH (m:Movie {name:\'' + movieName + '\'})-[r]-(s:Song)-[r2]-(si:Singer) return m.name, s.title, COLLECT(si.name)"}'
	request({
		method: 'POST',
		uri:localUri,
		body: cypher
	},
	function(error, response, body) {
		if(error != null)
		{
			console.log(error);
		}
		else
		{
			console.log('Response status code : ' + response.statusCode);
			console.log(body);
//			console.log(Enumerable.From(body.data).First());
			callback(body);
		}
	});

};

exports.list = function(request, response, next) {
	getAllMovies( function(body) {
		console.log(body);
		response.header('Content-Type', 'application/json');
		response.send(body);
	});
};

exports.movie = function(request, response, next) {
	getMovie(request.params.name, function(body) {
		console.log(request.params.name);
		console.log(body);
		response.header('Content-Type', 'application/json');
		response.send(body);
	});
};
