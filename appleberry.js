/*
$(document).ready(function(){
    $('.carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});
*/

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1,
    autoplay:true,
  })
});

/* toggle button*/
$(document).ready(function(){
    $(".menu_icon").click(function(){
        $(".sp_menu_toggle").slideToggle();
         });
    });
    
/* スライドショー　*/
$(window).load(function(){
  $(".s_image img").click(function(){
    var img_src = $(this).attr("src");
    $(".display_image img").attr("src", img_src);
  });
});