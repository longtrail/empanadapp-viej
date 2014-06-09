var app = angular.module('empanadapp');

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
    }
  ];

 return {
    getEmpanadas: function () {
      return empanadas;
    },
    getEmpanada: function (id) {
       window._(empanadas).find(function (e) {
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
    },
    clear: function(){
      empanadas = [];
    }
  };
}]);


app.factory('PersonasService', ["Persona", "lodash", function(Persona, _){
    var personas = [];

   return {
      getPersonas: function () {
        return personas;
      },
      getPersona: function (id) {
         return _(personas).find(function (e) {
            return e.id === id
         });
      },
      add: function (nombre) {
        var nuevo = new Persona(nombre);
        if (personas.length == 0) {
          var max = 0
        }
        else {
          var max = _(personas)
          .map(function (e){
            return e.id
          })
          .max();          
        }

        nuevo.id = max + 1;

        personas.push(nuevo);
        return nuevo;
      },
      clear: function(){
        personas = [];
      }
    };
}]);

app.factory('Persona', ["lodash", function(_){
  function Persona(nombre) {
    this.nombre = nombre;
    this.id = -1;
    this.empanadas = {};
  };

  Persona.prototype = {
    addEmpanada: function(id){
      this.empanadas[id] = this.cantEmpanadas(id) + 1;
      return this;
    },
    removeEmpanada: function(id) {
      if (this.cantEmpanadas(id) == 0) {
        throw RangeError('No tiene empanadas para remover');
      }

      this.empanadas[id] = this.cantEmpanadas(id) - 1;
      if (this.empanadas[id] === 0) {
        delete this.empanadas[id]
      }
      return this
    },
    cantEmpanadas: function(id) {
      return this.empanadas[id] || 0;
    },
    totalEmpanadas: function(){
      return this.empanadas.length
    }
  }

  return Persona
}]);

app.factory('lodash', function(){
  return window._
});
