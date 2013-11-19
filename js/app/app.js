console.log("SYSTEM: App module loading...");

define(['backbone', 'jquery', 'underscore', 'view/nav', 'view/footer', 'view/content'],
function(Backbone, $, _, NavView, FooterView, ContentView) {
  return {
    run : function() {
      var navView        = new NavView();
      var footerView     = new FooterView();
      var contentView    = new ContentView();
      
      var button = $("#button");
      var change = true;
      button.click(function() {
        button.empty();
        button.append((change ? "Another " : "A ") + "button");
        change = !change;
      });
      
      _.each($("#menu").children(), function(link) {
        $(link).click(function() {
          $(".active").removeClass("active");
          $(link).addClass("active");
        });
      });
      
      console.log("SYSTEM: Main application running...");
    }
  };
});