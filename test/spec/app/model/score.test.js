define(function(require) {
  
  var Score   = require('model/score');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/model/score", function() {
    
    env.beforeEach(function () {
      
      this.spec = env.currentSpec;
      
      this.score    = new Score();
      this.mockData = { score : 50, name : "Jesper" };
    });
    
    env.describe('Initialization', function() {
      env.it('Name should be empty', function() {
        this.spec.expect(this.score.get("name")).toEqual("");
      });
      
      env.it('Amount should be 0', function() {
        this.spec.expect(this.score.get("amount")).toEqual(0);
      });
    });
    
    env.describe('Setting values', function() {
      env.it('Name should be jesper', function() {
        this.score.set("name", "jesper");
        this.spec.expect(this.score.get("name")).toEqual("jesper");
      });
      
      env.it('Amount should be 50', function() {
        this.score.set("amount", 50);
        this.spec.expect(this.score.get("amount")).toEqual(50);
      });
    });
  });
});