$(document).ready(function(){
    console.log("Hi")
  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    dots: false,
    nav: true,
    items:4
  })

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });



    // Check Testimonials

  var leftArrow = $('.testimonial__table .fa-chevron-left'),
      rightArrow = $('.testimonial__table .fa-chevron-right');

  function checkClients() {
      $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
      $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
  }

  checkClients();

  $('.testimonial i').click(function () {
    
    if ($(this).hasClass('fa-chevron-right')) {
        
        $('.testimonial .active').fadeOut(500, function () {
            
            $(this).removeClass('active').next('.client').addClass('active').fadeIn();
            
            checkClients();
            
        });
        
    } else {
        
        $('.testimonial .active').fadeOut(500, function () {
            
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            
            checkClients();
            
        });
            
    }
  });





  
  // Click  Button To Go Top
  $('.top').click(function () {
              
    $('html, body').animate({scrollTop : 0}, 1000);
    
    return false;
  });


  // Animate Go Top Button
  window.onscroll = function () {
    // Fixed Navbar
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {

      $('.top').css({'transform': 'translateX(0px)', 'opacity': '1'});

    } else {
      $('.top').css({'transform': 'translateX(200px)', 'opacity': '0', 'transition': 'all .5s ease-in-out'});
    }
  }

    
});

