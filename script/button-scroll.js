$(function(){
  // 버튼 눌렀을때 스크롤 이동하는 스크립트
    $("#nav_logo").click(function(){
        $("html, body").animate({scrollTop:"0px"},700)
    })
    $("#m_nav > div").click(function(){
    var i = $(this).index(); //.index=$(this)의 순서
    if(i==0){
      $("html, body").animate({scrollTop:$(".section1").offset().top},700)
    }
    if(i==1){
      $("html, body").animate({scrollTop:$(".section2").offset().top},700)
    }
    if(i==2){
      $("html, body").animate({scrollTop:$(".section3").offset().top},700)
    }
    if(i==3){
      $("html, body").animate({scrollTop:$(".section4").offset().top},700)
    }
    if(i==4){
      $("html, body").animate({scrollTop:$(".section5").offset().top},700)
    }
    
  });
  // 각 버튼을 눌렀을때 & 해당 스크롤 위치에 갔을때 버튼 색상이 변하는 스크립트
  $(window).scroll(function(){
    var pos = $(window).scrollTop();
    $("#m_nav > div").css("border-bottom", "0px solid #6c0");
    
    if(pos>=$(".section5").offset().top){
        $("m_nav > div").eq(4).css("border-bottom", "0px solid #fff")
    }  
    else if(pos>=$(".section4").offset().top){
      $("#m_nav > div").eq(3).css("border-bottom", "7px solid #6c0")
    }
    else if(pos>=$(".section3").offset().top){
      $("#m_nav > div").eq(2).css("border-bottom", "7px solid #6c0")
    }
    else if(pos>=$(".section2").offset().top){
      $("#m_nav > div").eq(1).css("border-bottom", "7px solid #6c0")
    }
    else if(pos>=$(".section1").offset().top){
      $("#m_nav > div").eq(0).css("border-bottom", "7px solid #6c0")
    }
    
  });
})