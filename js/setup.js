console.log("SYSTEM: Conifguring RequireJS..");

requirejs.config({

  baseUrl: 'js/lib',

  paths: {
    // Base folder paths
    app         : '../app',
    view        : '../app/view',
    model       : '../app/model',
    template    : '../../template',
  
    // Lib paths
    jquery      : 'jquery/jquery',
    require     : 'require/require',
    text        : 'require/text',
    'bb-raw'    : 'backbone/backbone',
    backbone    : 'backbone/backbone-module',
    underscore  : 'underscore/underscore',
    "bootstrap" : 'bootstrap/bootstrap.min'
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
    }
  }
});

console.log("SYSTEM: Main module loading...");

require(["app/app"], function(app) {
  app.run();
});