define(function(require) {
  
  var Physics = require('ces/component/physics');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/component/physics", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(Physics).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var physics = new Physics();
        this.spec.expect(physics).toBeDefined();
        this.spec.expect(physics instanceof Physics).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.physics = new Physics();
        
      });
      
      env.afterEach(function() {
        
        this.physics = undefined;
        
      });
      
      env.it('_w should be defined and set to 0', function() {
      
        this.spec.expect(this.physics._w).toBeDefined();
        this.spec.expect(this.physics._w).toEqual(0);
        
      });
      
      env.it('_h should be defined and set to 0', function() {
      
        this.spec.expect(this.physics._h).toBeDefined();
        this.spec.expect(this.physics._h).toEqual(0);
        
      });
      
      env.it('_mass should be defined and set to 0', function() {
      
        this.spec.expect(this.physics._mass).toBeDefined();
        this.spec.expect(this.physics._mass).toEqual(0);
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.describe('getting and setting values', function() {
      
        env.beforeEach(function() {
          
          this.physics = new Physics();
          
        });
        
        env.afterEach(function() {
          
          this.physics = undefined;
          
        });
        
        env.it('can set _w using w', function() {
          
          this.physics.w = 50.0;
          this.spec.expect(this.physics._w).toEqual(50.0);
          
        });
        
        env.it('can get _w using w', function() {
          
          this.physics._w = -50.0;
          this.spec.expect(this.physics.w).toEqual(-50.0);
          
        });
        
        env.it('can set _h using h', function() {
          
          this.physics.h = 50.0;
          this.spec.expect(this.physics._h).toEqual(50.0);
          
        });
        
        env.it('can get _h using h', function() {
          
          this.physics._h = -50.0;
          this.spec.expect(this.physics.h).toEqual(-50.0);
          
        });
        
        env.it('can set _mass using mass', function() {
          
          this.physics.mass = 50.0;
          this.spec.expect(this.physics._mass).toEqual(50.0);
          
        });
        
        env.it('can get _mass using mass', function() {
          
          this.physics._mass = -50.0;
          this.spec.expect(this.physics.mass).toEqual(-50.0);
          
        });
        
        env.describe('incrementing values', function() {
          
          env.it('_w can be decremented using w', function() {
          
            this.physics.w = 50;
            this.physics.w -= 20;
            this.spec.expect(this.physics.w).toEqual(30);
            
          });
          
          env.it('_h can be incremented using h', function() {
            
            this.physics.h = 150;
            this.physics.h += 30;
            this.spec.expect(this.physics.h).toEqual(180);
            
          });
          
          env.it('_mass can be incremented using mass', function() {
            
            this.physics.mass = -500;
            this.physics.mass += -50;
            this.spec.expect(this.physics.mass).toEqual(-550);
            
          });
        
        });
      
      });
      
    });
    
  });
  
});