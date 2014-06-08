describe('Service', function() {
  beforeEach(module('empanadapp.services'));


  describe('PersonasService', function() {
    it('should return a JSON with data.results.length equal to 15 ', function(PersonasService) {


    	var termino = false;

    	


			Comic.get().then(function(res) {
    			console.log("ok");
    		termino = true;
    		},function(res) {
    			console.log("err");
    		termino = true;
    		});
	

		waitsFor(function(){
			
			return termino;
		}, "Tenia que haberlo encontrado ya", 5000);

		runs(function(){
			comic.should.equal(2);
		});



    });
  });
});
