app.factory('EmpanadasService', ["lodash", function(_){
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
      return empanadas;
    },
    getEmpanada: function (id) {
       _(empanadas).find(function (e) {
          return e.id == id
       });
    },
    add: function (nombre) {
      var max = _(empanadas)
      .map(function (e){
        return e.id
      })
      .max();

      var nueva = {
        id: max + 1,
        nombre: nombre
      };

      empanadas.push(nueva);
      return nueva;
    }
  };
}]);

