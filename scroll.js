$(function(){
  $(window).on('load scroll', function() {
    $(".show").each(function() {
       var winScroll = $(window).scrollTop();
       var winHeight = $(window).height();
       var scrollPos = winScroll + (winHeight * 0.8);
       if($(this).offset().top < scrollPos) {
          $(this).css({opacity: 1, transform: 'translate(0, 0)'});
       }
    });
  });

    $("#sports-show").click(function(){
        if($(".sports-type").hasClass("open")){
          $(".sports-type").removeClass("open");
          $(".sports-type").fadeOut();
        }else{
          $(".sports-type").addClass("open");
          $(".sports-type").fadeIn();
        }
    });
  
    $("#top-btn").click(function(){
      $("html,body").animate({
        "scrollTop":0
      },500);
    });
    
    $(".move-btn1").click(function(){
      $("html,body").animate({
        "scrollTop":1650
      },500);
    })

    $(".move-btn2").click(function(){
      $("html,body").animate({
        "scrollTop":2650
      },500);
    })

    $(".move-btn3").click(function(){
      $("html,body").animate({
        "scrollTop":3500
      },500);
    })
    $(".move-btn4").click(function(){
      $("html,body").animate({
        "scrollTop":4450
      },500);
    })
    
})