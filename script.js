var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "30px";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  if(window.pageYOffset==0){
    document.getElementById("header").style.top = "30px";
  }
  prevScrollpos = currentScrollPos;
}

$(window).on("load",function() {
  $(".fade").css("opacity",0);
  $(".fade").css("left", "-500px");
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each( function () {
          var objectdemiHeight = $(this).outerHeight();
          var objectBottom = $(this).offset().top+objectdemiHeight/2;
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            console.log(objectBottom); 
            $(this).animate({
                left:"+=500px",
                'opacity': '1',
              }, 500 , function(){
                $(this).pauseAnimation();
              });
          }
        })
      }).scroll();
           
  });


let width = $(window).width();
$(document).ready(function (){
  if (width<1001)
  {
    $(header).css("width", "20%");
    $(header).css("height", "40px");
    $(header).on("click", function(){
      $(".dropdown").addClass('get-down');
      if($(".get-down").css("height")=="0px"){
        $(".get-down").animate({
          height:"250px"
        },300)
      }
      if($(".get-down").css("height")=="250px"){
        $(".get-down").animate({
          height:"0px"
        },300)
      }
      if($("#nav").css("opacity")==0){
        $("#nav").fadeTo(100, 1);
      }
      if($("#nav").css("opacity")==1){
        $("#nav").fadeTo(100, 0);
      }
    $(window).scroll(function(){
      if($(".get-down").css("height")=="250px"){
        $(".get-down").animate({
          height:"0px"
        })
      }
      if($("#nav").css("opacity")==1){
        $("#nav").fadeTo(100, 0);
      }
    })  
    });
  }
})