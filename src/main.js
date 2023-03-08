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


  // quick view
  /* Background backdrop, show/hide based on modal state. */
    
Entering: "ease-out duration-300"
From: "opacity-0"
To: "opacity-100"
Leaving: "ease-in duration-200"
From: "opacity-100"
To: "opacity-0"

// Modal panel, show/hide based on modal state.
    
Entering: "ease-out duration-300"
  From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
  To: "opacity-100 translate-y-0 md:scale-100"
Leaving: "ease-in duration-200"
  From: "opacity-100 translate-y-0 md:scale-100"
  To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
/*
* $targetEl: required
* options: optional
*/
const modal = new Modal($targetEl, options);




// animation

// import { inView, animate } from "motion";

// inView("section", ({ target }) => {
//   animate(
//     target.querySelector("span"),
//     { opacity: 1, transform: "none" },
//     { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
//   );
// });



// ****************** scroll effect, kopieret fra motion one, og ændrer hele designet i stedet for kun i modal sektionen ****************
import { animate, scroll } from "motion";

const items = document.querySelectorAll("scroll2");

// Animate gallery horizontally during vertical scroll
scroll2(
  animate("ul_scroll2", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`]
  }),
  { target: document.querySelector("scroll2") }
);

// Progress bar representing gallery scroll
scroll2(animate(".progress", { scaleX: [0, 1] }), {
  target: document.querySelector("scroll2")
});

// Image title parallax
const segmentLength = 1 / items.length;
items.forEach((item, i) => {
  const header = item.querySelector("h2");

  scroll2(animate(header, { x: [200, -200] }), {
    target: document.querySelector("scroll2"),
    offset: [
      [i * segmentLength, 1],
      [(i + 1) * segmentLength, 0]
    ]
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
// import { inView, animate } from "motion";

// inView("fade", ({ target }) => {
//   animate(
//     target.querySelector("span"),
//     { opacity: 1, transform: "none" },
//     { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
//   );
// });