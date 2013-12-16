console.log("SYSTEM: Conifguring RequireJS..");

require.config({

  baseUrl: '../js/lib',

  paths: {
    // Base folder paths
    app             : '../app',
    view            : '../app/view',
    model           : '../app/model',
    collection      : '../app/collection',
    template        : '../../template',
    game            : '../game',
    ces             : '../ces',
    utility         : '../utility',
    spec            : '../../test/spec',
    
    // Lib paths
    jquery         : 'jquery/jquery',
    text           : 'require/text',
    'bb-raw'       : 'backbone/backbone',
    backbone       : 'backbone/backbone-module',
    localstorage   : 'backbone/backbone-localstorage',
    underscore     : 'underscore/underscore',
    bootstrap      : 'bootstrap/bootstrap.min',
    jasmine        : 'jasmine/jasmine',
    'jasmine-html' : 'jasmine/jasmine-html',
    'jasmine-blanket' : 'jasmine/jasmine-blanket'
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
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'jasmine-blanket': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

console.log("SYSTEM: Test module loading...");

require(['jquery', 'jasmine-html', 'jasmine-blanket'], function($, jasmine, blanket) {
  
  window.blanket.options('filter', ['app/', 'game/', 'ces/']); // data-cover-only (everything that is tested)
  window.blanket.options('antifilter', ['spec/']);             // data-cover-never (testing specs)

  var specs = [];
  specs.push('spec/app/model/score.test.js');
  specs.push('spec/app/collection/scores.test.js');
  specs.push('spec/ces/component/displacement.test.js');
 
  $(function(){
    require(specs, function(){
      
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 250;
      var htmlReporter = new jasmine.HtmlReporter();
  
      jasmineEnv.addReporter(htmlReporter);
      jasmineEnv.specFilter = function (spec) {
          return htmlReporter.specFilter(spec);
      };
      
      jasmineEnv.addReporter(new jasmine.BlanketReporter());
      jasmineEnv.currentRunner().execute();
    });
  });
});
