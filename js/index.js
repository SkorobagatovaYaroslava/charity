$(document).ready(function(){
  $(".slide-one").owlCarousel({
  	items: 3,
  	loop:true,
    margin:80,
    nav:false,
    smartSpeed:1500,
    autoplayTimeout:3500,
    autoplay:true,
    responsive:{ 
        0: {
        	items:1
        },
        600: {
        	items:2
        },
        1000: {
        	items:3
        }
    }
   })
});
