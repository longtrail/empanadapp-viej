var app = angular.module('empanadapp');

app.factory('EmpanadasService', function(){
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
});


app.factory('PersonasService', ["Persona", function(Persona, _){
    var personas = [];

   return {
      getPersonas: function () {
        return personas;
      },
      getPersona: function (id) {
         _(personas).find(function (e) {
            return e.id == id
         });
      },
      add: function (nombre) {
        var nuevo = Persona(nombre);
        
        var max = _(personas)
        .map(function (e){
          return e.id
        })
        .max();

        nuevo.id = max + 1;

        personas.push(nuevo);
        return nuevo;
      }
   };
}]);

app.factory('Persona', ["EmpanadasService", function(EmpanadasService){
  function Persona(inombre) {
    this.nombre = trim(nombre);
    this.id = -1;
    this.empanadas = {};
  }

  Persona.prototype = {
    addEmpanada: function(id){
      this.empanadas[id] = cantEmpanadas + 1;
      return this;
    },
    removeEmpanada: function(id) {
      this.empanadas[id] = this.cantEmpanadas(id) - 1
      return this
    },
    cantEmpanadas: function(id) {
      return this.empanadas[id] || 0;
    },
    totalEmpanadas: function(){
      return this.empanadas.length
    }
  }
}]);
