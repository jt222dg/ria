console.log("SYSTEM: Main view loading... ");

define(function(require) {
  
  // Required modules
  
  // Lib
  var Backbone        = require('backbone');
  var _               = require('underscore');
  
  // Views
  var ViewFactory     = require('view/helpers/factory');
  
  // Models
  var Score           = require('model/score');
  
  // Collections
  var Scores          = require('collection/scores');
  
  // Utility classes
  var ViewType        = require('view/helpers/viewtype');
  var PageType        = require('view/helpers/pagetype');
  
  var elements = {
    content : "#content-element",
    nav     : "#navigation-element",
    footer  : "#footer-element",
    sub     : "#subcontent-element"
  };
  
  var templates = {
    about   : require('text!template/about.html'),
    nav     : require('text!template/nav.html'),
    info    : require('text!template/info.html'),
    footer  : require('text!template/footer.html'),
    content : require('text!template/content.html'),
    game    : require('text!template/game.html'),
    scores  : require('text!template/scores.html')
  }
  
  return Backbone.View.extend({
    needsToUpdateContent : true,
    needsToUpdateNav     : true,
    needsToUpdateFooter  : true,
    
    initialize : function() {
    },
    
    renderMain : function() {
      if (this.needsToUpdateContent) {
        
        ViewFactory.changeView(ViewType.CONTENT, ViewFactory.getGenericView({
          el       : elements.content,
          template : templates.content
        }));
        
        this.needsToUpdateContent = !this.needsToUpdateContent;
      }
      
      if (this.needsToUpdateNav) {
        ViewFactory.changeView(ViewType.NAV, ViewFactory.getNavView({
          el       : elements.nav,
          template : templates.nav
        }));
        
        this.needsToUpdateNav = !this.needsToUpdateNav;
      }
      
      if (this.needsToUpdateFooter) {
        ViewFactory.changeView(ViewType.FOOTER, ViewFactory.getGenericView({
          el       : elements.footer,
          template : templates.footer
        }));
        
        this.needsToUpdateFooter = !this.needsToUpdateFooter;
      }
    },
    
    renderPage : function(pagetype) {
      this.renderMain();
      
      var activeTemplate = templates.content;
      
      switch (pagetype) {
        case PageType.MAIN:   activeTemplate = templates.info;   break;
        case PageType.GAME:   activeTemplate = templates.game;   break;
        case PageType.ABOUT:  activeTemplate = templates.about;  break;
        case PageType.SCORES: activeTemplate = templates.scores; break;
        default: console.log("invalid page type.");              break;
      }
      
      var options = {
        el       : elements.sub,
        template : activeTemplate
      }
      
      if (pagetype === PageType.SCORES) {
        options.model = this.initScores();
      }
      
      var view = (
        pagetype === PageType.SCORES ? ViewFactory.getScoresView(options) :
        pagetype === PageType.GAME   ? ViewFactory.getGameView(options)   :
        ViewFactory.getGenericView(options)
      );
      
      if (pagetype === PageType.GAME) {
        view.initScoreboard();
        this.needsToUpdateContent = true;
      }
      
      ViewFactory.changeView(ViewType.SUBCONTENT, view);
    },
    
    initScores : function() {
      var scores = new Scores([], { storage : "scores" });
      scores.fetch();
      
      var model = scores.first();
      while (model) {
        model.destroy();
        model = scores.first();
      }
      
      if (scores.findWhere({ name : "Jesper"}) === undefined) {
        scores.add(new Score({ name : "Jesper", amount : 5000 }));
      }
      
      if (scores.findWhere({ name : "Mya"}) === undefined) {
        scores.add(new Score({ name : "Mya", amount : 20000 }));
      }
      
      if (scores.findWhere({ name : "Luffy"}) === undefined) {
        scores.add(new Score({ name : "Luffy", amount : 10000 }));
      }
      
      if (scores.findWhere({ name : "Lucy"}) === undefined) {
        scores.add(new Score({ name : "Lucy", amount : 7500 }));
      }
      
      if (scores.findWhere({ name : "Reyna"}) === undefined) {
        scores.add(new Score({ name : "Reyna", amount : 13 }));
      }
      
      scores.save();
      
      return scores;
    }
  });
});