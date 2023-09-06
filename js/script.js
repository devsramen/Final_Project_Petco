$(function () {
  $(".scrollBtn").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 2000)
  })

  /*=============================================
   =    		 Preloader			      =
   =============================================*/

  setTimeout(function () {
    $('#preloader').fadeOut();
  }, 3000);



  // Fixed NAV Bar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()

    // ------ For Heading Scrolling Start ------
    if (scrolling > 200) {
      $(".headerBottom").addClass("fixedNav");
      $(".headerBottom").fadeIn(300);
    } else {
      $(".headerBottom").removeClass("fixedNav");
    }
    // ------ For Heading Scrolling Ended ------


    // ------ For Bottom To Top Scrolling Start ------
    if (scrolling > 200) {
      $(".scrollBtn").fadeIn(500);
      $(".scrollBtn").css({ bottom: "3%" });
    } else {
      $(".scrollBtn").fadeOut(500);
      $(".scrollBtn").css({ bottom: "110%" });
    }
    // ------ For Bottom To Top Scrolling Ended ------
  });

  // ========== For VenoBox Start ==========

  // FAQ Section Video
  new VenoBox({
    selector: '.faqVideoLink',
    autoplay: 'True',
  });
  // ========== For VenoBox Ended ==========


  // ========== For Slick Slider Start ==========

  // Service Slider Start
  // $('.serviceSliderItemWrapper').slick({
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   prevArrow: '.servicePrevArrow',
  //   nextArrow: '.serviceNexArrow'
  // });

  $('.serviceSliderItemWrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    // dots: true,
    // arrows: true,
    prevArrow: '#service .servicePrevArrow',
    nextArrow: '#service .serviceNexArrow',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Counter Up of Contact
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });








  // Service Slider Ended


  // Brand Section Start
  $('.brandItemWrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
});
// Brand Section Ended

// Meet Aooption Section Start
$('.maImageWrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});
// Meet Aooption Section Ended

// Meet The Animals Start  
$('.mtaSliderWrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.mtaLeftArrows',
  nextArrow: '.mtaRighArrows',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
});

// Meet The Animals Section Ended

// Meet Aooption with Gallery Section Start
$('.mtWithSliderGalleryWrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});
// Meet Aooption with Gallery Section Ended

// Blog Details Post Section Start
$('.bdPostsContent').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  arrows: true,
  prevArrow: '.bdPostPrevArrow',
  nextArrow: '.bdPostNextArrow'
});
// Blog Details Post Section Ended


// ============= Slick Slider Ended ================


//=======OFFER ITEM SLIDER======
$('.testCard_Slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  // autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  // arrows: true,
  prevArrow: '.dOHeading_arrows .prevArrow',
  nextArrow: '.dOHeading_arrows .nextArrow',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
});




// ******* Plugins activtion ********
new WOW().init();










});

