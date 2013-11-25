define(function(require) {
  
  // Required modules
  var Game     = require('game/controller/game');
  var _        = require('underscore');
  var Box      = require('game/model/box');
  var BoxLogic = require('game/logic/boxlogic');
  var BoxView  = require('game/view/boxview');
  var Camera   = require('game/view/camera');
  
  return Game.extend({
    boxLogic : undefined,
    boxview  : undefined,
    camera   : undefined,
    addTimer : 0.0,
    
    initialize : function() {
      this.boxLogic = new BoxLogic([
        new Box(350.0, 10.0),
        new Box(370.0, 40.0),
        new Box(390.0, 70.0),
      ]);
      
      this.boxView = new BoxView(this.boxLogic);
      
      this.addTimer = 0.0;
      this.camera = new Camera();
    },
    
    onInit : function() {
      console.log('onInit stage');
    },
    
    onEvent : function() {
      console.log('onEvent stage');
    },
    
    onLogic : function(delta) {
      this.addTimer += delta;
      
      if (this.addTimer >= 1.0) {
        this.boxLogic.addBox(new Box(350.0, 10.0));
        this.addTimer = 0.0;
      }
      
      this.boxLogic.update(delta);
    },
    
    onRender : function(delta) {
      this.boxView.render();
    },
    
    onCleanUp : function() {
      console.log('onCleanUp stage');
    }
  });
});