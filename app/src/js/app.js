angular.module('translapi', ['ui.bootstrap', 'xeditable', 'ngRoute', 'ngResource'])
.run(['editableOptions', function(editableOptions){
  // this is something added by xeditable indicating what icons are available
  editableOptions.theme = 'bs3';
}])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/zombify.html',
    controller: 'ZombifyController',
    controllerAs: 'zc'
  })
  .when('/zombify', {
    templateUrl: 'templates/zombify.html',
    controller: 'ZombifyController',
    controllerAs: 'zc'
  })
  .when('/unzombify', {
    templateUrl: 'templates/unzombify.html',
    controller: 'UnzombifyController',
    controllerAs: 'uc'
  });
}]);
