  app.factory('EmpanadasFactory', ["lodash", function(_){
    var empanadas = [
    {
    	id: 1,
    	nombre : 'Carne suave'
    },
    {
    	id : 2,
    	nombre : "Pollo"
    },
    {
    	id : 3,
    	nombre : "Humita"
    },
    {
    	id : 4,
    	nombre : "Carne cuchillo"
    },
    {
    	id : 5,
    	nombre : "Atun"
    }];

   return {
   		getEmpanadas: function () {
        return empanadas
      },
   		getEmpanada: function (id) {
   		   for(i;i)
   		}
   };
}]);