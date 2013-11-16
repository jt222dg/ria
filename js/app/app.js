console.log("SYSTEM: App module loading...");

define(['backbone', 'jquery', 'underscore', 'app/view/testview', 'app/model/TestModel', 'bootstrap'],
function(Backbone, $, _, TestView, TestModel) {
  return {
    run : function() {
      var testModel = new TestModel();
      var testModel2 = new TestModel();
      var testView = new TestView();
      
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
        })
      });
      
      console.log("SYSTEM: Main application running...");
    }
  };
});