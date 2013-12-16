define(function(require) {
  
  var Score   = require('model/score');
  var Scores  = require('collection/scores');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/collection/scores", function() {
    
    env.beforeEach(function () {
      
      this.spec = env.currentSpec;
      
      this.scores   = new Scores();
      this.mockData = { 
        score : new Score({ name : "Jesper", amount : 50 })
      }
    });
    
    env.afterEach(function() {
      this.scores = undefined;
      this.mockData.score = undefined;
    });
    
    env.describe('Initialization', function() {
      env.it('Comporator called on initialization', function() {
        this.spec.spyOn(this.scores, "initialize");
        this.spec.expect(this.scores.initialize).toHaveBeenCalled();
      });
      
      env.it('"Models" array is empty', function() {
        this.spec.expect(this.scores.models.length).toEqual(0);
      });
    });
  });
});