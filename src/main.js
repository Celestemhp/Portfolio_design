import "./style.css";
import 'flowbite';
import { Modal } from 'flowbite';

module.exports = {
    content: ["./**/*.html"],
    safelist: ["active"],
    theme: {
      fontFamily: {
        header: ["Raleway", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
  
      screens: {
        xs: "375px",
        ...defaultTheme.screens,
      },

container: {
    center: true,
    padding: "1rem",
  },

  shadows: {
    default: "0 2px 18px rgba(0, 0, 0, 0.06)",
    md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
  },
}
}

    //===== Back to top
    
    // // Show or hide the sticky footer button
    // $(window).on('scroll', function(event) {
    //     if($(this).scrollTop() > 600){
    //         $('.back-to-top').fadeIn(200)
    //     } else{
    //         $('.back-to-top').fadeOut(200)
    //     }
    // });
    // //Animate the scroll to yop
    // $('.back-to-top').on('click', function(event) {
    //     event.preventDefault();
        
    //     $('html, body').animate({
    //         scrollTop: 0,
    //     }, 1500);
    // });
    


// scroll ned fra hero, ny pil ***********
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// Pil
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// afprøver scroll effekt
