define(function(require) {
  
  var Score    = require('model/score');
  var Scores   = require('collection/scores');
  
  var Backbone = require('backbone');
  var jasmine  = require('jasmine-html');
  var _        = require('underscore');
  
  var env = jasmine.getEnv();
  
  return env.describe("app/collection/scores", function() {
    
    env.beforeEach(function() {
      this.spec = env.currentSpec;
    });
    
    env.afterEach(function() {
      this.spec = undefined;
    });
      
    env.describe('definition and instantiation', function() {
      
      env.it('is defined', function() {
        this.spec.expect(Scores).toBeDefined();
      });
      
      env.it('can be instantiated', function() {
        var scores = new Scores();
        this.spec.expect(scores).not.toBeNull();
      });
      
    });
    
    env.describe('new instance default values', function() {
      
      env.beforeEach(function() {
        this.scores = new Scores();
      });
      
      env.afterEach(function() {
        this.scores = undefined;
      });
      
      env.it('contains no models', function() {
        this.spec.expect(this.scores.models.length).toEqual(0);
      });
      
      env.it('localstorage is undefined', function() {
        this.spec.expect(this.scores.localStorage).toBeUndefined();
      });
      
    });
    
    env.describe('models', function() {
      env.describe('insertion and removing', function() {
        
        env.beforeEach(function() {
        
        this.scores     = new Scores();
        this.mockModels = [
          new Score({ name : "Reyna",  amount : 50 }),
          new Score({ name : "Jesper", amount : 5 }),
          new Score({ name : "Mya",    amount : 6000 }),
          new Score({ name : "Lucy",   amount : 13 }),
          new Score({ name : "Luffy",  amount : 900 })
        ];
        
        this.scores.add(this.mockModels);
      });
      
      env.afterEach(function() {
        
        // Remove all old testdata from local storage if needed
        var model = this.scores.first();
        while (model) {
          model.destroy();
          model = this.scores.first();
        }
      
        this.scores     = undefined;
        this.mockModels = undefined;
      });
        
        env.it('are sorted on insertion', function() {

          var firstAmount  = this.scores.first().get("amount");
          var secondAmount = this.scores.models[1].get("amount");
          this.spec.expect(firstAmount).toBeGreaterThan(secondAmount);
          
          var lastAmount = this.scores.last().get("amount");
          var minAmount  = (_.min(this.scores.models, function(score) { return score.get("amount"); })).get("amount");
          this.spec.expect(lastAmount).toEqual(minAmount);
          
        });
        
        env.it('can be removed', function() {

          // Remove the first model in the collection
          var beforeRemove = this.scores.models.length;
          var firstName = this.scores.first().get("name");
          this.scores.first().destroy();
          
          // Assert that the removed model is no longer in the collection
          this.spec.expect(this.scores.where( { name : firstName })[0]).toBeUndefined();
          
          // Make sure all other models are still in the collection
          this.spec.expect(this.scores.models.length).toEqual(beforeRemove-1);
          
        });
        
      });
      
      env.describe('LocalStorage', function() {
        
        env.beforeEach(function() {
        
          this.scores     = new Scores();
          this.mockModels = [
            new Score({ name : "Reyna",  amount : 50 }),
            new Score({ name : "Jesper", amount : 5 }),
            new Score({ name : "Mya",    amount : 6000 }),
            new Score({ name : "Lucy",   amount : 13 }),
            new Score({ name : "Luffy",  amount : 900 })
          ];
          
        });
        
        env.afterEach(function() {
          
          // Remove all old testdata from local storage if needed
          var model = this.scores.first();
          while (model) {
            model.destroy();
            model = this.scores.first();
          }
        
          this.scores     = undefined;
          this.mockModels = undefined;
          
        });
        
        env.it('is initialized', function() {
          
          this.scores.initLocalStorage("testStorage");
          this.spec.expect(this.scores.localStorage).toBeDefined();
          
        });
        
        env.it('Backbone.sync is called when adding models with Scores.save', function() {
          
          this.spec.spyOn(Backbone, 'sync').andCallFake(function() {
          });
          
          this.scores.initLocalStorage("testStorage");
          this.scores.add(this.mockModels)
          this.scores.save();
          
          this.spec.expect(Backbone.sync).toHaveBeenCalled();
          
        });
      });
    });
    
  });
  
});