$(document).ready(function(){
    //상단메뉴 배경색 조절
    //휴대폰에서는 배경색 보임
    if( $(window).width()<=600 ) {
        $("nav").addClass("act");
    }
    else {  //휴대폰보다 큰 화면일 때는 스크롤 높이에 따라 베경색을 조절함
        $(window).scroll(function(){
            //if( $(window).scrollTop() >= $("#top".height()+$("nav").height())  ) {
            if( $(window).scrollTop() >= $("#top").height()-100 ) {
                $("nav").addClass('act');
            }
            else    {
                $("nav").removeClass('act');
            }
        });
    }

    //클릭 위의 아이콘 누르면 #about으로 이동하게 하기
    $("#click i").click(function() {
        
    });

    //타자치는 효과
    if( $(window).width() <= 600 ) {  //모바일에서 타자치는 효과
        const $typings = " 안녕하세요. \n유혜원의\n포트폴리오입니다.";
        const tyLens = $typings.length;
        let j=0;
        let txts = "";
        function types() {
            if( j < tyLens ) {
                txts += $typings[j];
                document.querySelector("#typing").innerText = txts;
                j++;
                setTimeout(types, 200);
            }
        }
        types();
    }
    else {
        const $typing = "안녕하세요.\n유혜원의 포트폴리오입니다.";
        //console.log($typing[7]);  //홍
        const tyLen = $typing.length;
        console.log($typing.length); //$typing이라는 상수의 문자 개수 = 21
        let i = 0;
        let txt = "";
        function type() {
            if(i < tyLen) {
                txt += $typing[i];
                //$("#typing").text(txt); javascript하기 위해 지움. 이것은 jQery
                document.querySelector("#typing").innerText = txt;
                i++;
                setTimeout(type, 180);
            }
        }
        type();
    }  ///타자치는 효과 끝

    /////상단 메뉴 호버 활성화 유지
    $('#menu a').click(function(){
        $(this).addClass('act').siblings().removeClass('act');
    });

    //스크롤바를 내렸을 때의 효과 (== 스크롤이벤트 감지!)
    const homeTop = $("body").offset().top;
    const aboutTop = $("#about").offset().top;  //해당 콘텐츠의 top값을 '절대값'으로 얻어온다.
    const port1Top = $("#port1").offset().top - 400;
    const port2Top = $("#port2").offset().top - 400;
    const port3Top = $("#port3").offset().top - 400;
    const eventTop = $("#event").offset().top - 400;
    const contactTop = $("#contact").offset().top - 200;
    //==>상대값은 position()이고 절대값은 offset()  => 상대값은 기준이 부모이고 절대값은 기준이 윈도우
    let st = 0;  //scrollTop 변수 st의 값 0으로 설정
    let pos = 0;
    $(window).scroll(function(){
        st = $(window).scrollTop();
        //console.log(st);
        if( st >= homeTop && st < aboutTop ) {
            pos = 0;
        }
        if( st >= aboutTop && st < port1Top ) {
            //About에서 오른쪽 "skill" bar 애니메이션
            $("#photo progress").delay(100).animate({value : 85});
            $("#html progress").delay(200).animate({value : 80});
            $("#jquery progress").delay(300).animate({value : 75});
            $("#java progress").delay(400).animate({value : 70});
            $("#cpp progress").delay(500).animate({value : 50});
            $("#oven progress").delay(600).animate({value : 70});
            pos = 1;
        }
        if( st >= port1Top ) {
            $("#port1").addClass("act");
            pos = 2;
        }
        if( st >= port2Top) {
            $("#port2").addClass("act");
        }
        if( st >= port3Top) {
            $("#port3").addClass("act");
        }
        if( st >= eventTop && st < contactTop ) {
            pos = 3;
        }
        if( st >= contactTop ) {
            pos = 4;
        }
        $('#menu a').eq(pos).addClass('act').siblings().removeClass('act');
    });
    
    //이벤트 이미지를 클릭하면 큰 이미지가 나타난다
    $("#event>div>div").click(function(){
        //클릭한 썸네일이미지 주소를 가져온다
        const thumb = $(this).children("img").attr("src");
        //가져온 주소를 큰이미지주소로 변경한다.
        const change = thumb.replace('images/', '../photoshop&illust/');
        //변경한 이미지주소를 큰이미지에 대입한다.
        $("#popup img").attr("src", change);

        //클릭한 썸네일 이미지에서 alt값을 가져온다.
        const alt = $(this).children("img").attr("alt");
        //검정팝업 상단에 작품 제목
        $("#popup h3").text(alt);

        $("#popup").fadeIn();
    });

    //큰 팝업창 닫기
    $("#popup").click(function(){
        $(this).fadeOut();
    });
    
}); ////////////END
