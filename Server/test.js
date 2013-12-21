var request = require('request');
var uri = 'http://kambidb.sb01.stations.graphenedb.com:24789/db/data/cypher';
var localUri = 'http://localhost:7475/db/data/cypher';
var authr = {'user': 'kambi-db', 'pass': 'rqs1jbbhQ109720ViAAl', 'sendImmediately':false };
request({
	method: 'POST',
	uri: uri,
	body: '{ "query" : "MATCH (x:Movie) RETURN x.name as name, id(x) as id" }',
	auth: authr
	},
	function(error, response, body) {
		if(null == response || response.statusCode == 201)
		{
			console.log('document saved');
		}
		else
		{
			console.log('Response status code : ' + response.statusCode);
			console.log(body);
		}
	}
);
