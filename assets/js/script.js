jQuery(document).ready(function(){


// menu 
  $('.main-menu a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  
  });


  $('#nav-icon1').click(function(){
    $(this).toggleClass('opens');
  });




$(".mobile-menu").click(function(){
  $(".header").toggleClass("desk");

  return false;
});

// Smoothscroll ///    
$('.navbar-nav li a').on('click', function(event) {
    var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500);
      event.preventDefault();
});



// owl-carousel
  $('.services .owl-carousel').owlCarousel({
    'items': 2,
    'autoplay': true,
    'loop': true,
    'dots': true,
    'nav': true,
    'margin': 20,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:2
        
    }
    }
  }); 
  



  var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
    },
    scrollContainer: null,  
    resetAnimation: true,  
  }
);
wow.init();



// loader
setTimeout(function(){ 

  $('.loader').fadeOut(); }, 1000);




// mixitup
var mixer = mixitup('.filters');




});

