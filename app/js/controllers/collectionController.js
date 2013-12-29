'use strict';

kambiApp.controller('CollectionController',
    function CollectionController($scope) {
    	$scope.movies = 
    	 [
    		{ 
    			name:'Kakhi Chattai', 
    			image:'http://upload.wikimedia.org/wikipedia/en/thumb/d/df/Kaakki_Sattainew.jpg/220px-Kaakki_Sattainew.jpg' 
    		},
			{ 
				name:'Vetri Vizha', 
				image:'http://upload.wikimedia.org/wikipedia/en/f/f1/Vetri_VizhaKamal.jpg' 
			}
    	];
});
