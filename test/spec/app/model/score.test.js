define(function(require) {
  
  var Score   = require('model/score');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/model/score", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
      this.score    = new Score();
      this.mockData = { score : 50, name : "Jesper" };
      
    });
    
    env.beforeEach(function() {
      this.spec = env.currentSpec;
    });
    
    env.afterEach(function() {
      this.spec = undefined;
    });
      
    env.describe('definition and instantiation', function() {
      
      env.it('is defined', function() {
        this.spec.expect(Score).toBeDefined();
      });
      
      env.it('can be instantiated', function() {
        var score = new Score();
        this.spec.expect(score).not.toBeNull();
      });
      
    });
    
    env.describe('new instance default values', function() {
      
      env.beforeEach(function() {
        
        this.score = new Score();
        
      });
      
      env.afterEach(function() {
        
        this.score = undefined;
        
      });
      
      env.it('name is empty', function() {
        
        this.spec.expect(this.score.get("name")).toEqual("");
        
      });
      
      env.it('amount is 0', function() {
        
        this.spec.expect(this.score.get("amount")).toEqual(0);
        
      });
      
    });
    
    env.describe('Setting values', function() {
      
      env.beforeEach(function() {
        
        this.score = new Score();
        
      });
      
      env.afterEach(function() {
        
        this.score = undefined;
        
      });
      
      env.it('name is jesper', function() {
        
        this.score.set("name", "jesper");
        this.spec.expect(this.score.get("name")).toEqual("jesper");
        
      });
      
      env.it('amount is 50', function() {
        
        this.score.set("amount", 50);
        this.spec.expect(this.score.get("amount")).toEqual(50);
        
      });
      
    });
  });
});