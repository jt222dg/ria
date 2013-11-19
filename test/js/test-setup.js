console.log("TEST: Conifguring RequireJS..");

requirejs.config({
  baseUrl: '../js/lib',
  
  paths: {
    // Base folder paths
    src         : '../../test/js',
    spec        : '../../test/spec',
    app         : '../app',
    view        : '../app/view',
    model       : '../app/model',
    
    // Lib paths
    jquery      : 'jquery/jquery',
    require     : 'require/require',
    text        : 'require/text',
    'bb-raw'    : 'backbone/backbone',
    backbone    : 'backbone/backbone-module',
    underscore  : 'underscore/underscore',
    jasmine     : 'jasmine/jasmine',
    'jas-html'  : 'jasmine/jasmine-html'
  },
  
  shim: {
    'bb-raw' : {
      deps    : ['underscore', 'jquery'],
      exports : 'Backbone'
    },
    'underscore' : {
      exports : '_'
    },
    'jas-html' : {
      deps    : ['jasmine']
    }
  }
});

console.log("TEST: Jasmine loading...");

// Require all jasmine-related js as well as the file that runs all tests
require(['jasmine', 'jas-html', 'src/run-tests'], function() {
  // Set up the HTML reporter - this is reponsible for
  // aggregating the results reported by Jasmine as the
  // tests and suites are executed.
  jasmine.getEnv().addReporter(
    new jasmine.HtmlReporter()
  );
  
  // Run all the loaded test specs.
  jasmine.getEnv().execute();
});