angular.module('translapi')
.controller('ZombifyController', ['$routeParams', '$location', 'Translator', function($routeParams, $location, Translator){
	var zc = this; 
	var query = zc.query;

	zc.sendQuery = function(query) {
		// var stringifiedQuery = query.split("");
		Translator.get({q : query});
	};

}]);