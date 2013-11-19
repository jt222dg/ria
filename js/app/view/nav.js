console.log("SYSTEM: Nav view loading...");

define(['backbone', 'underscore', 'text!template/navigation.html'], function(Backbone, _, navTemplate) {
  var navigationElement = "#navigation-element";
  
  return Backbone.View.extend({
    
    el : $(navigationElement),
    
    defaults : {
    },
    
    initialize : function() {
      this.render();
    },
    
    render : function() {
      var variables = { searchLabel : "Search:" };
      var template = _.template(navTemplate, variables);
      this.$el.html(template);
    }
  });
});