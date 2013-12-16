define(['ces/component/displacement'], function(Displacement) {
  return describe("game/component/displacement", function() {
    beforeEach(function () {
      this.displacement = new Displacement();
    });
    
    describe('Initialization', function() {
      it('Name should be empty', function() {
        expect(this.displacement.x).toEqual(0);
      });
    });
  });
});