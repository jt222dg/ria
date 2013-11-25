console.log("SYSTEM: Conifguring RequireJS..");

require.config({

  baseUrl: 'js/lib',

  paths: {
    // Base folder paths
    app         : '../app',
    view        : '../app/view',
    model       : '../app/model',
    controller  : '../app/controller',
    template    : '../../template',
    game        : '../game',
    utility     : '../utility',
    
    // Lib paths
    jquery      : 'jquery/jquery',
    require     : 'require/require',
    text        : 'require/text',
    'bb-raw'    : 'backbone/backbone',
    backbone    : 'backbone/backbone-module',
    underscore  : 'underscore/underscore',
    bootstrap   : 'bootstrap/bootstrap.min',
    
    // Other
    base        : '../utility/base'
  },
  
  shim: {
    'bb-raw' : {
      deps    : ['underscore', 'jquery'],
      exports : 'Backbone'
    },
    'underscore' : {
      exports : '_'
    },
    'bootstrap' : {
      deps    : ['jquery']
    },
    'base' : {
      deps    : ['Backbone']
    }
  }
});

console.log("SYSTEM: Main module loading...");

require(["app/app"], function(app) {
  app.run();
});
