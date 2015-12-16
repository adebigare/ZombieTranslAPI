angular.module('translapi').factory('Translator', ['$resource', function($resource){
  return $resource('http://localhost:7000/zombify');
}]);