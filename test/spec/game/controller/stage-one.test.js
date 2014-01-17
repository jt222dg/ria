define(function(require) {
  
  var StageOne      = require('game/controller/stage-one');
  var EntityManager = require('ces/entity/entity-manager');
  var SystemManager = require('ces/system/system-manager');
  
  var jasmine  = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/controller/stage-one", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(StageOne).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var stageOne = new StageOne();
        this.spec.expect(stageOne).toBeDefined();
        this.spec.expect(stageOne instanceof StageOne).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
        this.stageOne = new StageOne();
        
      });
      
      env.afterEach(function() {
        
        this.stageOne = undefined;
        
      });
      
      env.it('_addTimer is defined and is set to 0.0', function() {
        
        this.spec.expect(this.stageOne._addTimer).toBeDefined();
        this.spec.expect(this.stageOne._addTimer).toEqual(0.0);
        
      });
      
      env.it('_addInterval is defined and is set to 0.2', function() {
        
        this.spec.expect(this.stageOne._addInterval).toBeDefined();
        this.spec.expect(this.stageOne._addInterval).toEqual(0.2);
        
      });
      
      env.it('_minAddInterval is defined and is set to 0.04', function() {
        
        this.spec.expect(this.stageOne._minAddInterval).toBeDefined();
        this.spec.expect(this.stageOne._minAddInterval).toEqual(0.04);
        
      });
      
      env.it('_systemManager is defined and is an instance of SystemManager', function() {
        
        this.spec.expect(this.stageOne._systemManager).toBeDefined();
        this.spec.expect(this.stageOne._systemManager instanceof SystemManager).toBeTruthy();
        
      });
      
      env.it('_entityManager is defined and is an instance of SystemManager', function() {
        
        this.spec.expect(this.stageOne._entityManager).toBeDefined();
        this.spec.expect(this.stageOne._entityManager instanceof EntityManager).toBeTruthy();
        
      });
      
    });
    
    env.describe('general functionality', function() {
      
      env.beforeEach(function() {
        
        this.stageOne = new StageOne();
        this.delta    = 0.016;
        
      });
      
      env.afterEach(function() {
        
        this.stageOne = undefined;
        
      });
      
      env.it('onLogic increments _addTimer by delta', function() {
        
        this.spec.spyOn(this.stageOne._systemManager, 'onLogic');
        var oldAddTimer = this.stageOne._addTimer;
        this.stageOne.onLogic(this.delta);
        var newAddTimer = this.stageOne._addTimer;
        
        this.spec.expect(newAddTimer).toEqual(oldAddTimer+this.delta);
        
      });
      
      env.it('onLogic adds an enimy when _addInterval is reached', function() {
        
        this.spec.spyOn(this.stageOne._systemManager, 'onLogic');
        this.spec.spyOn(this.stageOne._entityManager, 'createBox');
        this.stageOne.onLogic(1000);
        this.spec.expect(this.stageOne._entityManager.createBox).toHaveBeenCalled();
        
      });
      
      env.it('onLogic calls _systemManager.onLogic', function() {
        
        this.spec.spyOn(this.stageOne._systemManager, 'onLogic');
        this.stageOne.onLogic(this.delta);
        this.spec.expect(this.stageOne._systemManager.onLogic).toHaveBeenCalled();
        
      });
      
      env.it('onRender calls _systemManager.onRender', function() {
        
        this.spec.spyOn(this.stageOne._systemManager, 'onRender');
        this.stageOne.onRender(this.delta);
        this.spec.expect(this.stageOne._systemManager.onRender).toHaveBeenCalled();
        
      });
      
    });
    
  });
  
});