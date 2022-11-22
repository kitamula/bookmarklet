javascript:(function(f, s){
    s = document.createElement("script");
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    s.onload = function() {
        f(jQuery.noConflict(true))
    };
    document.body.appendChild(s)
})(function($){
    let adName = window.prompt("広告名", "");

    if(adName !== null){
        var adNameIteration = 1;
        $("input").each(function(){
            let input_name = $(this).attr('name');
            if(/data\[.+?\]\[adName\]/.test(input_name)){
                $(this).val(adName + ( '00' + adNameIteration ).slice( -2 ));
                adNameIteration++;
            }
        });
    }
});