$(function(){
  $("#sports-show").click(function(){
      if($(".sports-type").hasClass("open")){
        $(".sports-type").removeClass("open");
        $(".sports-type").fadeOut();
      }else{
        $(".sports-type").addClass("open");
        $(".sports-type").fadeIn();
      }
  });
  
});