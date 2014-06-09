var app = angular.module('empanadapp');
app.directive("appHeader", function() {
    return {
      restrict: 'E',
      //controller: headerController, // definir este controller en la carpeta controller
      templateUrl: "../../views/templates/header-template.html"
    };
});
