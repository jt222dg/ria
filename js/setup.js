console.log("SYSTEM: Conifguring RequireJS..");

require.config({

  baseUrl: 'js/lib',

  paths: {
    // Base folder paths
    app          : '../app',
    view         : '../app/view',
    model        : '../app/model',
    collection   : '../app/collection',
    template     : '../../template',
    game         : '../game',
    ces          : '../ces',
    utility      : '../utility',
    
    // Lib paths
    jquery       : 'jquery/jquery',
    text         : 'require/text',
    'bb-raw'     : 'backbone/backbone',
    backbone     : 'backbone/backbone-module',
    localstorage : 'backbone/backbone-localstorage',
    underscore   : 'underscore/underscore',
    bootstrap    : 'bootstrap/bootstrap.min',
    
    // Other
    router       : '../app/router'
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

require(["app/app", "jquery"], function(app, $) {
  $(app.run());
});
