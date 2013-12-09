define(['model/score', 'collection/scores'],
function (Score, Scores) {
  describe("app/model/score", function () {
    var score = new Score();
    it("default amount is 0", function () {
      expect(score.get("amount")).toEqual(0);
    });
    
    it("default name is empty", function() {
      expect(score.get("name")).toEqual("");
    });
  });
  
  describe("app/collection/scores", function () {
    var scores = new Scores();
    console.log(scores);
    it("has no models on initialization", function() {
      expect(scores.models.length).toEqual(0);
    });
  });
});