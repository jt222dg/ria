console.log("SYSTEM: Nav view loading...");

define(['backbone', 'underscore', 'text!template/footer.html'], function(Backbone, _, footerTemplate) {
  var navigationElement = "#footer-element";
  
  return Backbone.View.extend({
    
    el : $(navigationElement),
    
    defaults : {
    },
    
    initialize : function() {
      this.render();
    },
    
    render : function() {
      var variables = { searchLabel : "Search:" };
      var template = _.template(footerTemplate, variables);
      this.$el.html(template);
    }
  });
});