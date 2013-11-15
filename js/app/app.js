define(['backbone', 'jquery', 'underscore', 'app/view/testview', 'app/model/TestModel', 'bootstrap'],
function(Backbone, $, _, TestView, TestModel) {
  return {
    run : function() {
      var testModel = new TestModel();
      var testModel2 = new TestModel();
      var testView = new TestView();
      
      $("#button").click(function() {
        $("#button2").show();
        $(this).hide();
      });
      
      $("#button2").click(function() {
        $("#button").show();
        $(this).hide();
      });
      console.log("SYSTEM: Main application running...");
    }
  };
});