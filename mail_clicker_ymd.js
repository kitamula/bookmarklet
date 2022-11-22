javascript:(function(f, s){
    s = document.createElement("script");
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    s.onload = function() {
        f(jQuery.noConflict(true))
    };
    document.body.appendChild(s)
})(function($){
	let date = window.prompt("配信日", "YYYYMMDD");
    y = date.substr( 0, 4 );
    m = date.substr( 4, 2 );
    d = date.substr( 6, 2 );

    if(date !== null && date !== "YYYYMMDD"){
        $("select").each(function(){
            let select_name = $(this).attr('name');
            if(/data\[.+?\]\[adY\]/.test(select_name)){
                $(this).val(y);
            }
            if(/data\[.+?\]\[adM\]/.test(select_name)){
                $(this).val(m);
            }
            if(/data\[.+?\]\[adD\]/.test(select_name)){
                $(this).val(d);
            }
        });
    }
});