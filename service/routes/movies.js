
var request = require('request');
var linq = require('linq');
var uri = 'http://kambidb.sb01.stations.graphenedb.com:24789/db/data/cypher';
var localUri = 'http://localhost:7475/db/data/cypher';
var authr = {'user': 'kambi-db', 'pass': 'rqs1jbbhQ109720ViAAl', 'sendImmediately':false };
var getAllMovies = function(callback) {
	request({
	method: 'POST',
	uri: uri,
	body: '{ "query" : "MATCH (x:Movie) RETURN x.name as name, id(x) as id" }',
	auth: authr
	},
	function(error, response, body) {
		if(null == response)
		{
			console.log('Error');
		}
		else
		{
			console.log('Response status code : ' + response.statusCode);
			console.log(body);
			var a = JSLINQ(body);
			console.log(a);
			callback(x);
		}
	}
);
};

var getMovie = function(movieName, callback) {
	var cypher = '{"query" : "MATCH (m:Movie {name:\'' + movieName + '\'})-[r]-(s:Song)-[r2]-(si:Singer) return m.name, s.title, COLLECT(si.name)"}'
	request({
		method: 'POST',
		uri:localUri,
		body: cypher,
		auth: authr
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
