define(['backbone', 'jquery', 'underscore', 'app/view/testview'],
function(Backbone, $, _, TestView) {
    return {
        run : function() {
            var testView = new TestView();
            for (var i = 0; i < 10; ++i) {
                $("#content").append(testView.render());
            }
            
            console.log("SYSTEM: Main application running...");
        }
    };
});