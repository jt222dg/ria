define(['backbone', 'jquery', 'underscore', 'app/view/testview', 'app/model/TestModel'],
function(Backbone, $, _, TestView, TestModel) {
    return {
        run : function() {
            var testModel = new TestModel();
            var testView = new TestView();
            
            $("#content").append(testView.showData(testModel.getData()));
            testModel.setData(25);
            $("#content").append(testView.showData(testModel.getData()));
            
            console.log("SYSTEM: Main application running...");
        }
    };
});