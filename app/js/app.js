'use strict';

var kambiApp = angular.module('kambiApp', ['ngResource']);

kambiApp.config(function($routeProvider) {

  $routeProvider.
      when('/mycollection', {
        controller: 'CollectionController',
        templateUrl: 'views/collections.html'
      }).
      when('/movie', {
        controller: 'MovieController',
        templateUrl: 'views/movie.html'
      });
});
