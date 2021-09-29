var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "30px";
  } else {
    document.getElementById("header").style.top = "-100px";
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