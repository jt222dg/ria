console.log("SYSTEM: Nav view loading...");

define(['backbone', 'underscore', 'text!template/subcontent.html'], function(Backbone, _, subcontentTemplate) {
  var subcontentElement = "#subcontent-element";
  
  return Backbone.View.extend({
    
    el : subcontentElement,
    
    defaults : {
    },
    
    initialize : function() {
      this.render();
    },
    
    render : function() {
      var variables = { searchLabel : "Search:" };
      var template = _.template(subcontentTemplate, variables);
      this.$el.html(template);
    }
  });
});