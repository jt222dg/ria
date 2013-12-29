define(function(require) {
  
  var World   = require('ces/entity/world');
  var jasmine = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/entity/world", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(World).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var world = new World();
        this.spec.expect(world).toBeDefined();
        this.spec.expect(world instanceof World).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.world = new World();
        
      });
      
      env.afterEach(function() {
        
        this.world = undefined;
        
      });
      
      env.it('_mask is defined and is an empty array', function() {
      
        this.spec.expect(this.world._mask).toBeDefined();
        this.spec.expect(this.world._mask instanceof Array).toBeTruthy();
        
      });
      
      env.it('_displacement is defined and is an empty array', function() {
      
        this.spec.expect(this.world._displacement).toBeDefined();
        this.spec.expect(this.world._displacement instanceof Array).toBeTruthy();
        
      });
      
      env.it('_velocity is defined and is an empty array', function() {
      
        this.spec.expect(this.world._velocity).toBeDefined();
        this.spec.expect(this.world._velocity instanceof Array).toBeTruthy();
        
      });
      
      env.it('_appearance is defined and is an empty array', function() {
      
        this.spec.expect(this.world._appearance).toBeDefined();
        this.spec.expect(this.world._appearance instanceof Array).toBeTruthy();
        
      });
      
      env.it('_physics is defined and is an empty array', function() {
      
        this.spec.expect(this.world._physics).toBeDefined();
        this.spec.expect(this.world._physics instanceof Array).toBeTruthy();
        
      });
      
      env.it('_input is defined and is an empty array', function() {
      
        this.spec.expect(this.world._controls).toBeDefined();
        this.spec.expect(this.world._controls instanceof Array).toBeTruthy();
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.describe('getting and setting values', function() {
      
        env.beforeEach(function() {
          
          this.world = new World();
          
        });
        
        env.afterEach(function() {
          
          this.world = undefined;
          
        });
        
        env.it('can\'t set _mask using mask', function() {
          
          this.world._mask = undefined;
          this.spec.expect(this.world._mask).toBeUndefined();
          this.world.mask = [];
          this.spec.expect(this.world._mask).toBeUndefined();
          
        });
      
        env.it('can\'t set _displacement using displacement', function() {
          
          this.world._displacement = undefined;
          this.spec.expect(this.world._displacement).toBeUndefined();
          this.world.displacement = [];
          this.spec.expect(this.world._displacement).toBeUndefined();
          
        });
        
        env.it('can\'t set _velocity using velocity', function() {
          
          this.world._velocity = undefined;
          this.spec.expect(this.world._velocity).toBeUndefined();
          this.world.velocity = [];
          this.spec.expect(this.world._velocity).toBeUndefined();
          
        });
        
        env.it('can\'t set _appearance using appearance', function() {
          
          this.world._appearance = undefined;
          this.spec.expect(this.world._appearance).toBeUndefined();
          this.world.appearance = [];
          this.spec.expect(this.world._appearance).toBeUndefined();
          
        });
        
        env.it('can\'t set _controls using controls', function() {
          
          this.world._controls = undefined;
          this.spec.expect(this.world._controls).toBeUndefined();
          this.world.controls = [];
          this.spec.expect(this.world._controls).toBeUndefined();
          
        });
        
        env.it('can\'t set _physics using physics', function() {
          
          this.world._physics = undefined;
          this.spec.expect(this.world._physics).toBeUndefined();
          this.world.physics = [];
          this.spec.expect(this.world._physics).toBeUndefined();
          
        });
        
        env.it('can get _mask using mask', function() {
          
          this.world._mask = [5, 10, 13];
          this.spec.expect(this.world.mask).toEqual([5, 10, 13]);
          
        });
        
        env.it('can get _displacement using displacement', function() {
          
          this.world._displacement = [-2, -8];
          this.spec.expect(this.world.displacement).toEqual([-2, -8]);
          
        });
        
        env.it('can get _velocity using velocity', function() {
          
          this.world._velocity = [17];
          this.spec.expect(this.world.velocity).toEqual([17]);
          
        });
        
        env.it('can get _appearance using appearance', function() {
          
          this.world._appearance = [710, 123];
          this.spec.expect(this.world.appearance).toEqual([710, 123]);
          
        });
        
        env.it('can get _physics using physics', function() {
          
          this.world._physics = [14, 3, -8];
          this.spec.expect(this.world.physics).toEqual([14, 3, -8]);
          
        });
        
        env.it('can get _controls using controls', function() {
          
          this.world._controls = [14, 3, -8];
          this.spec.expect(this.world.controls).toEqual([14, 3, -8]);
          
        });
        
      });
      
    });
    
  });
  
});