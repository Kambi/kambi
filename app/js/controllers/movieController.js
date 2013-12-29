'use strict';

kambiApp.service('movie', function Movie($rootScope, $http) {
	var self = this;

	self.fetchMovie = function(movieName) {
		return $http.get('/api/movie/' + movieName);

	};
});

kambiApp.factory('MovieFactory', function($http) {
	var MovieFactory = {};

	MovieFactory.movie = {};

	MovieFactory.fetchMovie= function(movieName, callback) {
		var s = '{"data":{"columns":["s.title","COLLECT(si.name)"],"data":[["En Suthanthirathai",["S. Janaki","S. P. Balasubrahmanyam"]],["Raajadhi Raja Un Thanthirangal",["S. P. Balasubrahmanyam","Swarnalatha"]],["Amma Endru",["K. J. Jesudas"]],["Gumthalakkadi Gumathalakkadi",["S. P. Balasubrahmanyam"]],["Adikuthu Kuliru",["S. Janaki","Rajnikanth","S. Janaki","Rajnikanth"]],["Mannar Mannaney",["S. Janaki","S. P. Balasubrahmanyam"]]]},"status":200,"config":{"method":"GET","url":"/api/movie/Mannan"}}';
		var r = $http.get('/api/movie/' + movieName).success(function(data) {
			callback(parseMovie(data));
		});
	};

    var parseMovie = function(body) {

   		var $mov = {};
		$mov.song = [];

		for(var s in body.data)
		{
			var $song = {};
			$mov.name = body.data[s][0];
			$song.title = body.data[s][1];
			$song.singer = [];
			for(var t in body.data[s][2])
			{
				var $singer={};
				$singer.name = body.data[s][2][t];
				$song.singer.push($singer);
			}
			$mov.song.push($song);
		}

		return $mov;
	}

	return MovieFactory;
});

kambiApp.controller('MovieController',
    function MovieController($scope, $location, movie, MovieFactory) {

    	$scope.movie = MovieFactory.movie;

    	$scope.fetchMovie = function() {
    		var s = MovieFactory.fetchMovie($scope.query, function(movie) {
	    		$scope.mov = movie;
    		});
    	};
});
