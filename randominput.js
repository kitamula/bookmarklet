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
                case /company.*/.test(name):
                    $input.attr('value', 'テスト株式会社');
                    break;
                case /division.*/.test(name):
                    $input.attr('value', '営業部');
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
                case /(zip|postal|postal(_|)code)/.test(name):
                    $input.attr('value', '5500003');
                    break;
                case /(tel|telephone|phone|mobile)/.test(name):
                    $input.attr('value', '09011112222');
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
        $val = $options.eq(rdm(0, length-1)).attr('value');
        $select.val($val);
    });

    var $textareas = $('textarea');
    $textareas.each(function(index, textarea){
        $(textarea).html("句読点を入て拾文字、ここまでで二拾文字。\nこの文章はダミー三拾この文章はダミー四拾自分に見ですのは五拾\nうど偶然へよくな六拾同時に嘉納さんか七拾係壇ああ見当にす八拾し人その主義私か九拾をについご盲従う百。句読点込み百拾文字、ここまで百二拾文字。この文章はダミ百三拾この文章はダミ百四拾自分に見ですの百五拾うど偶然へよく百六拾同時に嘉納さん百七拾係壇ああ見当に百八拾し人その主義私百九拾をについご盲従弐百。");
    });

    // ラジオランダム
    (e=>{const a={};[].forEach.call(
        document.querySelectorAll("[type=radio],[type=checkbox]")
        ,e=>{e.name&&(void 0===a[e.name]&&(a[e.name]=[]),a[e.name].push(e))}),Object.keys(a).forEach(e=>{a[e][Math.floor(Math.random()*a[e].length)].click()})})()
});