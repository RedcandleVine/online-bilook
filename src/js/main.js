$(document).ready(function () {


  // Menu

  $('.js-menu').hover(
    function () {
      $(this).addClass('active');
      $("#js-overlay").fadeIn(100);
    },
    function () {
      $(this).removeClass('active');
      $("#js-overlay").fadeOut(100);
    }

  )

  // Swiper

  const mySwiper = new Swiper('.main-slider', {
    effect: 'fade',
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-slider--main .swiper-button-next',
      prevEl: '.arrow-slider--main .swiper-button-prev',
    },
  })


  const swiper = new Swiper('.slider-events', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.arrow-slider--events .swiper-button-next',
      prevEl: '.arrow-slider--events .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 480px
      1300: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      // when window width is <= 320px
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  const swiper2 = new Swiper('.slider-video', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.arrow-slider--video .swiper-button-next',
      prevEl: '.arrow-slider--video .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 480px
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  const swiper3 = new Swiper('.slider-gallery', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    initialSlide: 2,
    loop: true,
    watchOverflow: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.arrow-slider--gallery .swiper-button-next',
      prevEl: '.arrow-slider--gallery .swiper-button-prev',
    },
  });

  const swiper4 = new Swiper('.slider-similar', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.arrow-slider--similar .swiper-button-next',
      prevEl: '.arrow-slider--similar .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 480px
      1550: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  const swiper5 = new Swiper('.slider-seen', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.arrow-slider--seen .swiper-button-next',
      prevEl: '.arrow-slider--seen .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 480px
      1550: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

    const swiper6 = new Swiper('.slider-combined', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.arrow-slider--combined .swiper-button-next',
      prevEl: '.arrow-slider--combined .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 480px
      1550: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  const swiper7 = new Swiper('.slider-date', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.arrow-slider--date .swiper-button-next',
      prevEl: '.arrow-slider--date .swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 480px
      1550: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 320px
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  // Modals

  $(".js-modal").on("click", function (e) {
    e.preventDefault();
    const currentModal = $(this).attr(`href`);
    $(currentModal + `, #js-overlay`).fadeIn(500);
    $(`#js-overlay`).addClass(`overlay--modal`);
    $(`body`).addClass(`open-modal`);
  });


  $(`#js-overlay, .js-modal-close`).on(`click`, function (e) {
    e.preventDefault();
    $(`.modal, #js-overlay`).fadeOut(100);
    $(`#js-overlay`).removeClass(`overlay--modal`);
    $(`body`).removeClass(`open-modal`);
  });


  // Btn-profile

  $(".js-profile").on("click", function (e) {
    e.preventDefault();
    const currentModal = $(this).attr(`href`);
    $(this).toggleClass("open");
    $(`#float-profile`).toggleClass('open-profile');
  });


  // Regions


  $("#city-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#cities li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


  // Scroll

  $('.regions__wrapper').mCustomScrollbar({
    theme: "dark-thick",
    axis: "x",
    advanced: {
      autoExpandHorizontalScroll: true
    }
  });


  // Select

  $('select').niceSelect();


  let bodyNode = document.body;

  bodyNode.onload = function () {
    bodyNode.classList.add(`endLoad`);
  };



  // Form registration

  $(function () {
    $(".btn").click(function () {
      $(".form-signin").toggleClass("form-signin-left");
      $(".form-signup").toggleClass("form-signup-left");
      $(".frame").toggleClass("frame-long");
      $(".signup-inactive").toggleClass("signup-active");
      $(".signin-active").toggleClass("signin-inactive");
      $(".forgot").toggleClass("forgot-left");
      $(this).removeClass("idle").addClass("active");
    });
  });

  $(function () {
    $(".btn-signup").click(function () {
      $(".nav").toggleClass("nav-up");
      $(".form-signup-left").toggleClass("form-signup-down");
      $(".success").toggleClass("success-left");
      $(".frame").toggleClass("frame-short");
    });
  });

  $(function () {
    $(".btn-signin").click(function () {
      $(".btn-animate").toggleClass("btn-animate-grow");
      $(".welcome").toggleClass("welcome-left");
      $(".cover-photo").toggleClass("cover-photo-down");
      $(".frame").toggleClass("frame-short");
      $(".profile-photo").toggleClass("profile-photo-down");
      $(".btn-goback").toggleClass("btn-goback-up");
      $(".forgot").toggleClass("forgot-fade");
    });
  });

  // Count

  $('#count').timeTo({
    timeTo: new Date(new Date('Mon Oct 23 2020 9:00:00 GMT+0300 (Москва, стандартное время)')),
    displayDays: 1,
    theme: "white",
    displayCaptions: true,
    fontSize: 36,
    captionSize: 14,
    lang: 'ru'
  });


  // Menu scroll

  let menu = $('.js-menu'),
    mainSectionHeight = $('.main-section').height();

  $(document).on('scroll', function () {

    let documentScroll = $(this).scrollTop();

    if (documentScroll > mainSectionHeight) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });

  // Menu fade-out

  let footer = $('.page-footer'),
    counter = 0;
  $(window).scroll(function () {
    let scroll = $(window).scrollTop() + $(window).height();
    let offset = footer.offset().top

    if (scroll > offset && counter == 0) {
      $('.js-menu').fadeOut(500);
      counter = 1;
    } else if (scroll < offset && counter == 1) {
      $('.js-menu').fadeIn(500);
      counter = 0;
    }
  });


  // Favorite icon

  $(".favorite-action").on("click", function () {
    $(this).toggleClass(`liked`);
  });

  // Favorite
  $(".btn-check").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass(`active`);
  });


  // Mmenu

  // $("#menu").mmenu({
	// 	extensions: [ "position-left", "theme-black", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset" ],
	// 	navbar: {
	// 		title: ""
	// 	},
	// 	navbars: [{
	// 		height: 2,
	// 		content: [
	// 			'<a class="link-menu" href="tel:88000000000"><svg><use xlink:href="img/sprite.svg#icon-tel"></use></svg></a>',
	// 			'<a class="link-menu" href="#"><svg><use xlink:href="img/sprite.svg#icon-avatar"></use></svg></a>',
	// 			'<a class="link-menu" href="mailto:info@bilook.ru"><svg><use xlink:href="img/sprite.svg#icon-email"></use></svg></a>'
	// 		]
	// 	}, {
	// 		content: ["prev","title"]
	// 	}]}, { });
	// 			$(".mh-head.mm-sticky").mhead({
	// 				scroll: {
	// 					hide: 200
	// 				}
	// 			});
	// 			$(".mh-head:not(.mm-sticky)").mhead({
	// 				scroll: false
	// 			});

    $(".text").readmore({
      moreLink: '<button class="spoiler-text btn-border btn-border--white"><svg viewBox="0 0 200 50"><rect x="1" y="0" fill="none" rx="25" ry="25" width="98%" height="100%"></rect></svg><span>Показать еще</span></button>',
      lessLink: '<button class="spoiler-text btn-border btn-border--white"><svg viewBox="0 0 200 50"><rect x="1" y="0" fill="none" rx="25" ry="25" width="98%" height="100%"></rect></svg><span>Свернуть</span></button>',
      collapsedHeight: 300,
      speed: 100,
    
      afterToggle: function (trigger, element, expanded) {
        if ($(element).hasClass("readmore-js-collapsed")) {
          $(element).removeClass("readmore-js-collapsed");
        } else {
          $(element).addClass("readmore-js-collapsed");
        }
      },
    });


   // Datepicker

  $('.datepicker-here').datepicker();



});