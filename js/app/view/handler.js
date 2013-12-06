console.log("SYSTEM: Main view loading... ");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var ViewFactory = require('view/factory');
  var NavView     = require('view/nav');
  var FooterView  = require('view/footer');
  var ContentView = require('view/content');
  var InfoView    = require('view/info');
  var GameView    = require('view/game');
  var AboutView   = require('view/about');
  var ScoresView  = require('view/score');
  
  var Score       = require('model/score');
  var Scores      = require('collection/scores');
  
  var ViewType    = require('view/viewtype');
  
  return Backbone.View.extend({
    defaults : {
    },
    
    initialize : function() {
    },
    
    renderMain : function() {
      if (!(ViewFactory.getActiveView(ViewType.CONTENT) instanceof ContentView)) {
        ViewFactory.changeView(ViewType.CONTENT, new ContentView());
      }
      
      if (!(ViewFactory.getActiveView(ViewType.NAV) instanceof NavView)) {
        ViewFactory.changeView(ViewType.NAV, new NavView());
      }
      
      if (!(ViewFactory.getActiveView(ViewType.FOOTER) instanceof FooterView)) {
        ViewFactory.changeView(ViewType.FOOTER, new FooterView());
      }
    },
    
    renderGamePage : function() {
      this.renderMain();
      ViewFactory.changeView(ViewType.SUBCONTENT, new GameView());
    },
    
    renderMainPage : function() {
      this.renderMain();
      ViewFactory.changeView(ViewType.SUBCONTENT, new InfoView());
    },
    
    renderAboutPage : function() {
      this.renderMain();
      ViewFactory.changeView(ViewType.SUBCONTENT, new AboutView());
    },
    
    renderScoresPage : function() {
      this.renderMain();
      
      var scores = new Scores([
        new Score({name : "Jesper", amount : 100}),
        new Score({name : "Alan",  amount  : 1337}),
        new Score({name : "John",  amount  : 350}),
      ]);
      
      ViewFactory.changeView(ViewType.SUBCONTENT, new ScoresView({ model : scores }));
    }
    
  });
});