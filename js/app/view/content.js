console.log("SYSTEM: Nav view loading...");

define(['backbone', 'underscore', 'text!template/content.html', 'view/subcontent'], function(Backbone, _, contentTemplate, SubContent) {
  var contentElement = "#content-element";
  
  return Backbone.View.extend({
    
    el : contentElement,
    
    defaults : {
    },
    
    initialize : function() {
      this.render();
    },
    
    render : function() {
      
      var variables = { searchLabel : "Search:" };
      var template = _.template(contentTemplate, variables);
      this.$el.html(template);
      
      var subContent = new SubContent({ el : "#subcontent-element" });
      subContent.render();
    }
  });
});