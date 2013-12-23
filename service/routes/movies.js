
var request = require('request');
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
			callback(body);
		}
	}
);
};

exports.list = function(request, response, next) {
	getAllMovies( function(body) {
		console.log(body);
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(body);
	});
};