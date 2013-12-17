define(function(require) {
  
  var Score   = require('model/score');
  var Scores  = require('collection/scores');
  var jasmine = require('jasmine-html');
  var _       = require('underscore');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/collection/scores", function() {
    
    env.beforeEach(function () {
      
      this.spec = env.currentSpec;
      
      this.scores = new Scores();
      this.mockData = {
        scores : [
          new Score({ name : "Reyna",  amount : 50 }),
          new Score({ name : "Jesper", amount : 5 }),
          new Score({ name : "Mya",    amount : 6000 }),
          new Score({ name : "Lucy",   amount : 13 }),
          new Score({ name : "Luffy",  amount : 900 })
        ]
      }
    });
    
    env.afterEach(function() {
      
      // Remove all old testdata from local storage if needed
      var model = this.scores.first();
      while (model) {
        model.destroy();
        model = this.scores.first();
      }
      
      this.scores         = undefined;
      this.mockData.score = undefined;
    });
    
    env.describe('Initialization', function() {
      env.it('collection contains no models', function() {
        this.spec.expect(this.scores.models.length).toEqual(0);
      });
    });
    
    env.describe('Models operations', function() {
      env.it('models are added', function() {
        this.scores.add(this.mockData.scores);
        this.spec.expect(this.scores.models.length).toEqual(this.mockData.scores.length);
      });
      
      env.it('models are sorted on insertion', function() {
        this.scores.add(this.mockData.scores);
        
        var firstAmount  = this.scores.first().get("amount");
        var secondAmount = this.scores.models[1].get("amount");
        this.spec.expect(firstAmount).toBeGreaterThan(secondAmount);
        
        var lastAmount = this.scores.last().get("amount");
        var minAmount  = (_.min(this.scores.models, function(score) { return score.get("amount"); })).get("amount");
        this.spec.expect(lastAmount).toEqual(minAmount);
      });
      
      env.it('model is removed correctly', function() {
        this.scores.add(this.mockData.scores);
        
        // Remove the first model in the collection
        var beforeRemove = this.scores.models.length;
        var firstName = this.scores.first().get("name");
        this.scores.first().destroy();
        
        // Try to find the removed model in the collection by it's name
        // And assert that it was indeed removed
        this.spec.expect(this.scores.where( { name : firstName })[0]).toBeUndefined();
        
        // Make sure other models are still in the collection
        this.spec.expect(this.scores.models.length).toEqual(beforeRemove-1);
      });
    });
  });
});