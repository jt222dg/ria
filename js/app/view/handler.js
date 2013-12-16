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
  var PageType    = require('view/pagetype');
  
  var _           = require('underscore');
  
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
    
    renderPage : function(pagetype) {
      this.renderMain();
      
      switch (pagetype) {
        case PageType.MAIN:   this.renderMainPage();   break;
        case PageType.GAME:   this.renderGamePage();   break;
        case PageType.ABOUT:  this.renderAboutPage();  break;
        case PageType.SCORES: this.renderScoresPage(); break;
        default: console.log("invalid page type.");    break;
      }
    },
    
    renderGamePage : function() {
      ViewFactory.changeView(ViewType.SUBCONTENT, new GameView());
    },
    
    renderMainPage : function() {
      ViewFactory.changeView(ViewType.SUBCONTENT, new InfoView());
    },
    
    renderAboutPage : function() {
      ViewFactory.changeView(ViewType.SUBCONTENT, new AboutView());
    },
    
    renderScoresPage : function() {
      var scores = new Scores();
      
      scores.fetch();
      
      var model;
      while (model = scores.first()) {
        model.destroy();
      }
      
      if (scores.findWhere({ name : "Jesper"}) === undefined) {
        scores.add(new Score({ name : "Jesper", amount : "5000" }));
      }
      
      if (scores.findWhere({ name : "Mya"}) === undefined) {
        scores.add(new Score({ name : "Mya", amount : "20000" }));
      }
      
      if (scores.findWhere({ name : "Luffy"}) === undefined) {
        scores.add(new Score({ name : "Luffy", amount : "10000" }));
      }
      
      if (scores.findWhere({ name : "Lucy"}) === undefined) {
        scores.add(new Score({ name : "Lucy", amount : "7500" }));
      }
      
      if (scores.findWhere({ name : "Reyna"}) === undefined) {
        scores.add(new Score({ name : "Reyna", amount : "13" }));
      }
      
      scores.forEach(function(model) {
        model.save();
      });
      
      ViewFactory.changeView(ViewType.SUBCONTENT, new ScoresView({ model : scores }));
    }
    
  });
});