$(function() {       
    
    //メモを追加機能
    //以下は基本的にこのページ内のpopupに入力されたデータを入れる
    $(".text_add").on("click",function(){
        $(".edit_popup_one").addClass("active");
        $(".save_content_one").removeClass("active");
        $(".add_content_one").addClass("active");
    });

    //テキスト削除であり、以下は基本的にこのページ内のpopupに入力されたデータを入れる
    $(".edit_memo_remove").on("click",function(){
        $(this).parent().parent().parent().addClass("edit_active");
    });

    //メモを編集すると押したときに編集のポップアップを表示する
    //テキスト編集であり、以下は基本的にこのページ内のpopupに入力されたデータを入れる
    $(".edit_memo_edit").on("click",function(){
        $(".edit_popup_one").addClass("active");
        $('.edit_now').removeClass('edit_now');
        $(this).parent().parent().parent().addClass("edit_now");
        var text_edit = $(this).parent().prev().val();
        var file_edit = $(this).parent().next().val();
        $(".add_content_one").removeClass("active");
        $(".save_content_one").addClass("active");
        $('.edit_text').html(text_edit);
        $('.saving_file').html(file_edit);


    });


    //ポップアップが出て、追加を押したとき
    $(".add_content_one").on("click",function(){
        //あとはデータの受け渡しするコマンドが必要
        $('.lite').children('.memo').first().clone(true).appendTo($('.lite'));
        $('.lite').children('.memo').first().removeClass('edit_active');
        //データを受け取る
        var edit_receive = $(this).parent().children('.edit_text').val();
        //var file_receive = $(this).parent().parent().children('.edit_saving_file').val();


        //追加する
        $('.lite').children('.memo').first().children('.topic_component').children('.text').html(edit_receive);
        //$('.lite').children('.memo').first().children('.saving_file').html(file_receive);

    });

    //編集するためのポップアップが出て、保存を押したとき
    $(".save_content_one").on("click",function(){
        $(".edit_popup_one").removeClass("active");
        //あとはデータの受け渡しするコマンドが必要

        
        var text_edit_edit = $('.edit_text').val();
        $('.edit_now').children('.topic_component').children('.text').html(text_edit_edit);
        var file_edit_edit = $('.edit_saving_file').val();
        $('.edit_now').children('.topic_component').children('.saving_file').html(file_edit_edit);


        $('.edit_now').removeClass('edit_now');


    });
    //あとで動的に付けた要素を消す
    $(Document).on("click",".save_content_one",function(){
        $(".edit_popup_one").removeClass("active");
        //あとはデータの受け渡しするコマンドが必要
        
    });

    //編集するためのポップアップが出て、保存せず閉じるを押したとき
    $(".close_popup_one").on("click",function(){
        $(".edit_popup_one").removeClass("active");
    });
    //あとで動的に付けた要素を消す
    $(Document).on("click",".close_popup_one",function(){
        $(".edit_popup_one").removeClass("active");        
    });


});
