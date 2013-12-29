console.log("SYSTEM: Conifguring RequireJS..");

require.config({

  baseUrl: '../js/lib',

  paths: {
    // Base folder paths
    app               : '../app',
    view              : '../app/view',
    model             : '../app/model',
    collection        : '../app/collection',
    template          : '../../template',
    game              : '../game',
    ces               : '../ces',
    utility           : '../utility',
    spec              : '../../test/spec',
    
    // Lib paths
    jquery            : 'jquery/jquery',
    text              : 'require/text',
    'bb-raw'          : 'backbone/backbone',
    backbone          : 'backbone/backbone-module',
    localstorage      : 'backbone/backbone-localstorage',
    underscore        : 'underscore/underscore',
    bootstrap         : 'bootstrap/bootstrap.min',
    jasmine           : 'jasmine/jasmine',
    'jasmine-html'    : 'jasmine/jasmine-html',
    'jasmine-blanket' : 'jasmine/jasmine-blanket',
    sinon             : 'sinon/sinon',
    'jasmine-sinon'   : 'sinon/jasmine-sinon'
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
    jasmine : {
      exports : 'jasmine'
    },
    'jasmine-html' : {
      deps    : ['jasmine'],
      exports : 'jasmine'
    },
    'jasmine-blanket' : {
      deps    : ['jasmine'],
      exports : 'jasmine'
    },
    'jasmine-sinon' : {
      deps    : ['sinon', 'jasmine'],
      exports : 'sinon'
    }
  }
});

console.log("SYSTEM: Test module loading...");

require(['jquery', 'jasmine-html', 'jasmine-blanket'], function($, jasmine, blanket) {
  
  // data-cover-only (everything that is tested)
  window.blanket.options('filter', ['app/', 'game/', 'ces/']);
  
  // data-cover-never (testing specs and certain view / event specific classes)
  window.blanket.options(
    'antifilter',
    [
      'spec/',
      'ces/system/render-system',
      'game/canvas-handler',
      'game/event-handler'
    ]
  );

  var specs = [];
  
  // App tests
  specs.push('spec/app/model/score.test.js');
  specs.push('spec/app/collection/scores.test.js');
  specs.push('spec/app/view/generic-view.test.js');
  specs.push('spec/app/view/helpers/factory.test.js');
  
  // CES Component tests
  specs.push('spec/ces/component/component.test.js');
  specs.push('spec/ces/component/appearance.test.js');
  specs.push('spec/ces/component/displacement.test.js');
  specs.push('spec/ces/component/physics.test.js');
  specs.push('spec/ces/component/velocity.test.js');
  specs.push('spec/ces/component/input.test.js');
  
  // CES Entity tests
  specs.push('spec/ces/entity/world.test.js');
  specs.push('spec/ces/entity/entity-manager.test.js');
  
  // CES System tests
  specs.push('spec/ces/system/system.test.js');
  specs.push('spec/ces/system/system-manager.test.js');
  specs.push('spec/ces/system/collision-system.test.js');
  specs.push('spec/ces/system/movement-system.test.js');
  specs.push('spec/ces/system/render-system.test.js');
  specs.push('spec/ces/system/input-system.test.js');
  
  // Game tests
  specs.push('spec/game/camera.test');
  specs.push('spec/game/game-handler.test');
  
  // Game Controller tests
  specs.push('spec/game/controller/stage-one.test');
  
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
