console.log("SYSTEM: Router module loading...");

define(function(require) {
  
  // Required modules
  var Backbone    = require('backbone');
  var ViewHandler = require('app/view-handler');
  var GameHandler = require('game/game-handler');
  
  // Private variables
  var urlStack = [];
  
  function cleanLastVisited() {
    if (urlStack.pop() === 'game') {
      GameHandler.stopGame();
    }
      
    urlStack.push(Backbone.history.fragment);
  }
  
  return Backbone.Router.extend({
    routes : {
      ''         : 'index',
      'index'    : 'index',
      'game'     : 'game',
      'about'    : 'about',
      '*default' : 'def'
    },
    
    defaults : {
      viewHandler : undefined
    },
    
    initialize : function() {
      this.viewHandler = new ViewHandler();
      urlStack.push(Backbone.history.fragment);
    },
    
    index : function() {
      cleanLastVisited();
      this.viewHandler.renderMainPage();
    },
    
    game : function() {
      cleanLastVisited();
      this.viewHandler.renderGamePage();
      GameHandler.startGame();
    },
    
    about : function() {
      cleanLastVisited();
      this.viewHandler.renderAboutPage();
    },
    
    def : function(def) {
      cleanLastVisited();
      console.log("in default route");
    }
  });
});