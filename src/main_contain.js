$(function() {

      
    // 今後のスケジュール等のタブ切り替え
    $(".content_number").on("click", function() {  //１．タブをクリックしたときに
        var i = $(this).index();  //２．クリックしたタブが何個目かをiに代入
        $(".content_cover").removeClass("active");  //３．全てのボックスからactiveクラスを外す
        $(".content_cover").eq(i).addClass("active");  //４．ボックスのi番目にactiveクラスを付ける

    });

    // コンテンツ1の中のコンテンツ追加のためのpopup
    $(".content_one_add_button").on("click", function() {  //１．タブをクリックしたときに
        $(".popup_one").addClass("active");
    });

    // コンテンツ1の中のコンテンツ追加のためのpopupを消す場合
    $(".close_popup_one").on("click", function() {  //１．タブをクリックしたときに
        $(".popup_one").removeClass("active");
    });

    // コンテンツ2の中のコンテンツ追加のためのpopup
    $(".content_second_add_button").on("click", function() {  //１．タブをクリックしたときに
        $(".popup_second").addClass("active");
    });

    // コンテンツ2の中のコンテンツ追加のためのpopupを消す場合
    $(".close_popup_second").on("click", function() {  //１．タブをクリックしたときに
        $(".popup_second").removeClass("active");
    });
    
    // コンテンツ１の中のコンテンツを追加する時、
    //popupを消すことと、その追加するために用意したテキストボックスの内容を
    //受け渡して、それをmain pageで表現することが必要

    $(".add_content_second").on("click", function() { 
        var $before_div_second = $(this).parent().parent().parent();
        $before_div_second.children('div').first().clone().appendTo($before_div_second);
        //加える時にデータベースから持ってきた進捗度合いを考えて、計算する。
        $before_div_second.children('div').last().find(".change_1").css('transform','rotate(0deg)');
        $before_div_second.children('div:last').find(".change_2").css('transform','rotate(0deg)');
        $(".popup_second").removeClass("active");
    });
    //コンポーネントをクリックされたら、それに付随した情報を基に
    //その詳細情報が出るような別ページに飛ぶ
    $(".component_content_one").on("click", function(){
        var i = $(this).index()
        window.open("./component_content_one.html")
    
    });



    $(".add_content_one").on("click",function(){
        // class="memo"
        var $before_div = $(this).parent().parent().prev()
        $before_div.children('div').first().clone().appendTo($before_div)
        //加える時にデータベースから持ってきた進捗度合いを考えて、計算する。
        $before_div.children('div').last().find(".change_1").css('transform','rotate(0deg)')
        $before_div.children('div:last').find(".change_2").css('transform','rotate(0deg)')
        $(".popup_one").removeClass("active");
    });

    //もし、データベースから読み込んだ時、数が足りなかったら数をたす
    var $div_length_contain_one = $('.component_content_one').length
    //あとはfor文で繰り返し
    if ($div_length_contain_one < 100) {
        $('.component_content_one').parent().children('div').first().clone().appendTo($('.component_content_one').parent())
        //加える時にデータベースから持ってきた進捗度合いを考えて、計算する。
        //rotateについてはもう一度計算しなおさなければならない。
        $('.component_content_one').parent().children('div:last').find(".change_1").css('transform','rotate(0deg)')
        $('.component_content_one').parent().children('div:last').find(".change_2").css('transform','rotate(0deg)')
    }

});