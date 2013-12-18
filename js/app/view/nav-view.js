console.log("SYSTEM: Nav view loading...");

define(function(require) {
  
  // Required modules
  var GenericView = require('view/generic-view');
  var Backbone    = require('backbone');
  var _           = require('underscore');
  var $           = require('jquery');
  
  var navView = GenericView.extend({
    render : function() {
      GenericView.prototype.render.call(this);
      
      switch (Backbone.history.fragment) {
        case "index"  : this.activateHomeButton();   break;
        case "game"   : this.activateGameButton();   break;
        case "about"  : this.activateAboutButton();  break;
        case "scores" : this.activateScoresButton(); break;
        default       : this.activateHomeButton();   break;
      }
    },
    
    events : {
      "click #home"   : "activateHomeButton",
      "click #game"   : "activateGameButton",
      "click #about"  : "activateAboutButton",
      "click #scores" : "activateScoresButton"
    },
    
    activateHomeButton : function(event) {
      $('.active').removeClass('active');
      $('#home').parent().addClass('active');
    },
    
    activateGameButton : function(event) {
      $('.active').removeClass('active');
      $('#game').parent().addClass('active');
    },
    
    activateAboutButton : function(event) {
      $('.active').removeClass('active');
      $('#about').parent().addClass('active');
    },
    
    activateScoresButton : function(event) {
      $('.active').removeClass('active');
      $('#scores').parent().addClass('active');
    }
  });

  return navView;
});