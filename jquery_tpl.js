javascript:(function(f, s){
    s = document.createElement("script");
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    s.onload = function() {
        f(jQuery.noConflict(true))
    };
    document.body.appendChild(s)
})(function($){
    // Any codes here.
});