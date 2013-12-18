console.log("SYSTEM: Nav view loading...");

define(function(require) {
  
  // Required modules
  var GenericView = require('view/generic-view');
  var Backbone    = require('backbone');
  var _           = require('underscore');
  var $           = require('jquery');
  
  var scoresView = GenericView.extend({
    render : function() {
      var variables = { scores : this.model.models };
      var template = _.template(this.template, variables);
      this.$el.html(template);
    }
  });

  return scoresView;
});