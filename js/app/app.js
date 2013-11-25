console.log("SYSTEM: App module loading...");

define(function(require) {
  
  // Required modules
  var Backbone = require('backbone');
  var $        = require('jquery');
  var _        = require('underscore');
  var Router   = require('app/router');
  
  var app = {};
  $(app ={
    run : function() {
    
      (new Router());
      Backbone.history.start();

      /*
      var boxes = new Boxes([
          new Box({ x :  1.0, y :  1.0 }),
          new Box({ x : 20.0, y : 20.0 }),
          new Box({ x : 40.0, y : 40.0 })
      ]);
      
      var boxView = new BoxView({ model : boxes});
      */
    }
  });
  
  return app;
});