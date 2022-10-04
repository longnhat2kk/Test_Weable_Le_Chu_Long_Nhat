
// Fullpage
new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['about-us','home', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});
// new fullPage('#fullpage', {
//     responsiveWidth: 800
// });

//   .section-home .img-play
$(".section-home .img-play").click(function (e) { 
  
    
});

// Menu
  
    $(".menu").click(function (e) { 
        $(".menu-show ").addClass("active");
    });
    $(".menu-show .btn-close").click(function (e) { 
        $(".menu-show").removeClass("active");
    });


// Section Home
Fancybox.bind("[data-fancybox-plyr]", {
    on: {
      reveal: (fancybox, slide) => {
        if (typeof Plyr === undefined) {
          return;
        }
  
        let $el;
  
        if (slide.type === "html5video") {
          $el = slide.$content.querySelector("video");
        } else if (slide.type === "video") {
          $el = document.createElement("div");
          $el.classList.add("plyr__video-embed");
  
          $el.appendChild(slide.$iframe);
  
          slide.$content.appendChild($el);
        }
  
        if ($el) {
          slide.player = new Plyr($el);
        }
      },
      "Carousel.unselectSlide": (fancybox, carousel, slide) => {
        if (slide.player) {
          slide.player.pause();
        }
      },
      "Carousel.selectSlide": (fancybox, carousel, slide) => {
        if (slide.player) {
          slide.player.play();
        }
      },
    },
  });





// Slick Slider lĩnh vực
$('.slick-slider-linh-vuc').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
    // autoplaySpeed:1500,
    prevArrow: '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFF" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFF" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });