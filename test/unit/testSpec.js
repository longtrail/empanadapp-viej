describe('Service', function() {
  beforeEach(angular.mock.module('empanadapp'));


  describe('EmpanadasService', function() {

    it('should add a empanada to the list', inject(function(EmpanadasService) {
      var cantEmpanadas = EmpanadasService.predefinedList().length;
      var empanada = EmpanadasService.add("cebolla");
      empanada.nombre.should.be.equal('cebolla');
      empanada.id.should.equal(cantEmpanadas + 1);
      EmpanadasService.getEmpanadas().should.have.length(cantEmpanadas + 1);
      EmpanadasService.getEmpanadas()[cantEmpanadas].should.equal(empanada)
    }));

    it('should two a empanada to the list', inject(function(EmpanadasService) {
      var cantEmpanadas = EmpanadasService.predefinedList().length;
      var cebolla = EmpanadasService.add("cebolla");
      var peperoni = EmpanadasService.add("peperoni");

      cebolla.nombre.should.be.equal('cebolla');
      cebolla.id.should.equal(cantEmpanadas + 1);

      peperoni.nombre.should.be.equal('peperoni');
      peperoni.id.should.equal(cantEmpanadas + 2);
      
      EmpanadasService.getEmpanadas().should.have.length(cantEmpanadas + 2);
      EmpanadasService.getEmpanadas()[cantEmpanadas].should.equal(cebolla)
      EmpanadasService.getEmpanadas()[cantEmpanadas + 1].should.equal(peperoni)
    }));

    it('should have return the desired empanada', inject(function(EmpanadasService) {
      var cantEmpanadas = EmpanadasService.predefinedList().length;
      var empanada = EmpanadasService.add("cebolla");
      var returnedEmpanada = EmpanadasService.getEmpanada(cantEmpanadas + 1);
      
      returnedEmpanada.nombre.should.be.equal('cebolla');
      returnedEmpanada.id.should.equal(cantEmpanadas + 1);
      returnedEmpanada.should.be.equal(empanada)
    }));

    it('should have return undefined when the empanada does not exist', inject(function(EmpanadasService) {
      var returnedEmpanada = EmpanadasService.getEmpanada(100);
      expect(returnedEmpanada).to.be.undefined;
    }));

    it('should not have any empanada when initialized', inject(function(EmpanadasService) {
      var cantEmpanadas = EmpanadasService.predefinedList().length;
      EmpanadasService.getEmpanadas().should.have.length(cantEmpanadas)
    }));

  });


  describe('PersonasService', function() {

    it('should add a person to the list', inject(function(PersonasService) {
      var person = PersonasService.add("juan");
      person.nombre.should.be.equal('juan');
      person.id.should.equal(1);
      PersonasService.getPersonas().should.have.length(1);
      PersonasService.getPersonas()[0].should.equal(person)
    }));

    it('should two a person to the list', inject(function(PersonasService) {
      var juan = PersonasService.add("juan");
      var pedro = PersonasService.add("pedro");
      juan.nombre.should.be.equal('juan');
      juan.id.should.equal(1);

      pedro.nombre.should.be.equal('pedro');
      pedro.id.should.equal(2);
      
      PersonasService.getPersonas().should.have.length(2);
      PersonasService.getPersonas()[0].should.equal(juan)
      PersonasService.getPersonas()[1].should.equal(pedro)
    }));

    it('should have return the desired person', inject(function(PersonasService) {
      var person = PersonasService.add("juan");
      var returnedPerson = PersonasService.getPersona(1);
      returnedPerson.nombre.should.be.equal('juan');
      returnedPerson.id.should.equal(1);
      returnedPerson.should.be.equal(person)
    }));

    it('should have return undefined when the person does not exist', inject(function(PersonasService) {
      var returnedPerson = PersonasService.getPersona(100);
      expect(returnedPerson).to.be.undefined;
    }));

    it('should not have any person when initialized', inject(function(PersonasService) {
      PersonasService.getPersonas().should.have.length(0)
    }));

    it('should add a empanada and then get the same person with the modified empanada', inject(function(PersonasService) {
      var person = PersonasService.add("juan");
      person.addEmpanada(1)
      PersonasService.getPersona(1).empanadas[1].should.be.equal(1)
    }));
    
    it('should add a empanada and then get the same person with the modified empanada', inject(function(PersonasService) {
      PersonasService.add("juan");
      var person = PersonasService.getPersona(1)
      person.addEmpanada(1)
      PersonasService.getPersona(1).empanadas[1].should.be.equal(1)
    }));

  });

  describe('PersonasService', function() {
    it('should add a empanada to the person and define the property of the id if not exited', inject(function(Persona) {
      var p = new Persona("juan");
      p.addEmpanada(1)
      p.empanadas[1].should.be.equal(1)
    }));

    it('should add two empanadas to the person and define the property of the id and sum 2', inject(function(Persona) {
      var p = new Persona("juan");
      p.addEmpanada(1)
      p.addEmpanada(1)
      p.empanadas[1].should.be.equal(2)
    }));

    it('should start with no empanadas at all', inject(function(Persona) {
      var p = new Persona("juan");
      p.empanadas.should.eql({});
    }));

    it('should throw an error if no empanadas left to remove', inject(function(Persona) {
      var p = new Persona("juan");
      function errorFn () {
        p.removeEmpanada(1)
      }
      expect(errorFn).to.throw(RangeError, 'No tiene empanadas para remover');
      p.empanadas.should.eql({});
    }));


    it('should remove the property if it has no empanadas', inject(function(Persona) {
      var p = new Persona("juan");
      p.addEmpanada(1);
      p.removeEmpanada(1);
      expect(p.empanadas[1]).to.not.exist
      p.empanadas.should.eql({});

      var p = new Persona("pedro");
      p.addEmpanada(1);
      p.addEmpanada(1);
      p.removeEmpanada(1);
      p.removeEmpanada(1);
      expect(p.empanadas[1]).to.not.exist
      p.empanadas.should.eql({});
      
    }));

    it('should remove the property if it has no empanadas and leave the others intact', inject(function(Persona) {
      var p = new Persona("juan");
      p.addEmpanada(1);
      p.addEmpanada(2);
      p.addEmpanada(3);
      p.addEmpanada(3);
      p.removeEmpanada(1);
      p.empanadas.should.deep.eql(
        {
          2: 1, 
          3: 2
        });
    }));

    it('should follow correctly the sequence of adding and removing', inject(function(Persona) {
      var p = new Persona("juan");
      p.addEmpanada(1);
      p.addEmpanada(2);
      p.addEmpanada(2);
      p.removeEmpanada(2);
      p.addEmpanada(3);
      p.addEmpanada(2);
      p.removeEmpanada(2);
      p.removeEmpanada(2);
      p.addEmpanada(3);
      p.addEmpanada(1);
      p.removeEmpanada(1);
      p.empanadas.should.deep.eql(
        {
          1: 1, 
          3: 2
        });
    }));
  });
});
