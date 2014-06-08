'use strict';

var app = angular.module('empanadapp', ['ngRoute']).constant('_', window._);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {templateUrl: 'views/main.html'});
  $routeProvider.when('/empanadas', {templateUrl: 'views/empanadas.html'});
  $routeProvider.when('/personas', {templateUrl: 'views/personas.html'});
  $routeProvider.when('/resumen', {templateUrl: 'views/resumen.html'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);

// No tocar. Es para mejorar seguridad.
app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
