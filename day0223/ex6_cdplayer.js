$(function(){
    // h1.title 을 클릭시 음악 목룍이 나오도록 한다
    $("h1.title").click(function(){
        $("ul.music-list").slideDown('slow');
    });

    // 곡 선택시 이벤ㅌ,
    $("ul.music-list li").click(function(){
        // 노래 제목을 얻어서 h1.title 에 넣기
        let title=$(this).text();
        $("h1.title").text(title);

        // class 를 얻어서 #cd 에 class로 추가
        let selectClass=$(this).attr("class");
        // $("#cd").attr("class",selectClass);

        // cd가 change 되는 효과ㅡㄹ 주기 위해서 animate 이용
        $("#cd").animate({width:"0" },'slow',function(){
            // cd변경 
            $("#cd").attr("class",selectClass);


            // 다시 너비 조절
            $(this).animate({width:'300px'},'slow')
       });

      
        $(this).parent().slideUp('slow');
    })
});