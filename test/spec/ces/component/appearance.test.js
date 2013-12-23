define(function(require) {
  
  var Appearance    = require('ces/component/appearance');
  var jasmine      = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/appearance", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('Initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Appearance).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var appearance = new Appearance();
        this.spec.expect(appearance).toBeDefined();
        this.spec.expect(appearance instanceof Appearance).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.appearance = new Appearance();
        
      });
      
      env.afterEach(function() {
      
        this.appearance = undefined;
        
      });
      
      env.it('rgb(r,g,b) is rgb(0,0,0)', function() {
        
        this.spec.expect(this.appearance.color.r).toEqual(0);
        this.spec.expect(this.appearance.color.g).toEqual(0);
        this.spec.expect(this.appearance.color.b).toEqual(0);
        
      });
      
    });
    
    env.describe('general functionality', function() {
    
      env.beforeEach(function() {
        
        this.appearance = new Appearance();
        
      });
      
      env.afterEach(function() {
      
        this.appearance = undefined;
        
      });
      
      env.it('toString calls color three times', function() {
        
        this.spec.spyOn(this.appearance, 'color');
        this.appearance.toString();
        this.spec.expect(this.appearance.color).toHaveBeenCalled();
        this.spec.expect(this.appearance.color.callCount).toEqual(3);
        
      });
      
    });
    
  });
  
});