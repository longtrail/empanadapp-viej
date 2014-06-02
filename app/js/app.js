'use strict';

var app = angular.module('empanadapp', ['ngRoute', "ngResource"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'views/partial1.html'});
  $routeProvider.when('/view2', {templateUrl: 'views/partial2.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// No tocar. Es para mejorar seguridad.
app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
