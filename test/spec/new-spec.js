console.log("TEST: New-Spec loading...");

define(['model/technique'], function(Technique) {
  
  var tech = new Technique();
  
  // Test suite for technique model
  describe("Testing Technique model", function() {
    describe("variables default", function() {
      
      // Test specs
      it("name", function() {
        expect(tech.get('name')).toEqual('new technique');
      });
      
      it("description", function() {
        expect(tech.get('description')).toEqual('empty');
      });
    });
  });
});