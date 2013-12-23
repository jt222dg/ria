define(function(require) {
  
  var Displacement = require('ces/component/displacement');
  var jasmine      = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/displacement", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Displacement).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var displacement = new Displacement();
        this.spec.expect(displacement).toBeDefined();
        this.spec.expect(displacement instanceof Displacement).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.displacement = new Displacement();
        
      });
      
      env.afterEach(function() {
        
        this.displacement = undefined;
        
      });
    
      env.it('_x is defiend and set to 0', function() {
        
        this.spec.expect(this.displacement._x).toBeDefined();
        this.spec.expect(this.displacement._x).toEqual(0);
        
      });
      
      env.it('_y is defiend and set to 0', function() {
        
        this.spec.expect(this.displacement._x).toBeDefined();
        this.spec.expect(this.displacement._y).toEqual(0);
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.beforeEach(function() {
        
        this.displacement = new Displacement();
        
      });
      
      env.afterEach(function() {
        
        this.displacement = undefined;
        
      });
      
      env.describe('setting values', function() {
        
        env.it('can set _x using x', function() {
          
          this.displacement.x = 5.5;
          this.spec.expect(this.displacement._x).toEqual(5.5);
          
        });
        
        env.it('can get _x using x', function() {
          
          this.displacement._x = -5.5;
          this.spec.expect(this.displacement.x).toEqual(-5.5);
          
        });
        
        env.it('can set _y using y', function() {
          
          this.displacement.y = 99.999;
          this.spec.expect(this.displacement._y).toEqual(99.999);
          
        });
        
        env.it('can get _y using y', function() {
          
          this.displacement._y = -99.999;
          this.spec.expect(this.displacement.y).toEqual(-99.999);
          
        });
        
      });
      
      env.describe('Incrementing values', function() {
        
        env.it('can increment _x using x', function() {
          
          this.displacement.x = 9;
          this.displacement.x += 1;
          this.spec.expect(this.displacement._x).toEqual(10);
          
        });
        
        env.it('can decrement _y using y', function() {
          
          this.displacement.y = -1;
          this.displacement.y -= 1;
          this.spec.expect(this.displacement._y).toEqual(-2);
          
        });
        
      });
      
    });
    
  });
  
});