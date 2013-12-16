define(['model/score'], function(Score) {
  return describe("app/model/score", function() {
    beforeEach(function () {
      this.score = new Score();
      this.mockData = { score : 50, name : "Jesper" };
    });
    
    describe('Initialization', function() {
      it('Name should be empty', function() {
        expect(this.score.get("name")).toEqual("");
      });
      
      it('Amount should be 0', function() {
        expect(this.score.get("amount")).toEqual(0);
      });
    });
    
    describe('Setting values', function() {
      it('Name should be jesper', function() {
        this.score.set("name", "jesper");
        expect(this.score.get("name")).toEqual("jesper");
      });
      
      it('Amount should be 50', function() {
        this.score.set("amount", 50);
        expect(this.score.get("amount")).toEqual(50);
      });
    });
  });
});