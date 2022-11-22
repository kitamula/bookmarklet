javascript:(function(f, s){
    s = document.createElement("script");
    s.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    s.onload = function() {
        f(jQuery.noConflict(true))
    };
    document.body.appendChild(s)
})(function($){
    function rdm(min,max){
        return Math.floor( Math.random() * (max + 1 - min) ) + min ;
    }
    var $inputs = $('input');
    $inputs.each(function(index, input){
        let $input = $(input);
        let type = $input.attr('type');
        let name = $input.attr('name');
        let email = 's.kitamura.biz@gmail.com';
        if(type == 'text'){
            switch (true) {
                case /(e|)mail(_confirm|_confirmation|)/.test(name):
                    $input.attr('value', email);
                    break;
                case /address.*/.test(name):
                    $input.attr('value', '住所テスト');
                    break;
                case /^first(_|)name$/.test(name):
                    $input.attr('value', '太郎');
                    break;
                case /^last(_|)name$/.test(name):
                    $input.attr('value', '田中');
                    break;
                case /^name$/.test(name):
                    $input.attr('value', '田中太郎');
                    break;
                case /^first(_|)name_kana$/.test(name):
                    $input.attr('value', 'タロウ');
                    break;
                case /^last(_|)name_kana$/.test(name):
                    $input.attr('value', 'タナカ');
                    break;
                default:
                    $input.attr('value', 'テストテキスト');
                    break;
            }
        }else if(type == 'email') {
            $input.attr('value', email);
        }
    });

    var $selects = $('select');
    $selects.each(function(index, select){
        let $select = $(select);
        var $options = $select.find('option');
        var length = $options.length;
        $select.val($options.eq(rdm(0, length-1)).attr('value'));

    });

    var $textareas = $('textarea');
    $textareas.each(function(index, textarea){
        $(textarea).html("入力テスト\nテスト");
    });

    // ラジオランダム
    (e=>{const a={};[].forEach.call(
        document.querySelectorAll("[type=radio],[type=checkbox]")
        ,e=>{e.name&&(void 0===a[e.name]&&(a[e.name]=[]),a[e.name].push(e))}),Object.keys(a).forEach(e=>{a[e][Math.floor(Math.random()*a[e].length)].click()})})()
});