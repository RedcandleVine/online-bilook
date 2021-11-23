document.addEventListener("DOMContentLoaded", function () {
	const swiper8 = new Swiper(".main-galery-slider", {
		slidesPerView: "auto",
		spaceBetween: 15,
		centeredSlides: true,
		initialSlide: 1,
		loop: true,
		watchOverflow: true,

		navigation: {
			nextEl: document.querySelector(".main-galery__next"),
			prevEl: document.querySelector(".main-galery__prev"),
		},
		pagination: {
			el: document.querySelector(".main-galery__pagination"),
			clickable: true,
		},
		// Responsive breakpoints
	});

	let cinemaSlider = document.querySelectorAll(".js-slider-cinema");

	if (cinemaSlider.length > 0) {
		cinemaSlider.forEach((element) => {
			let elSlider = element.querySelector(".slider-cinema");
			let elSliderArrowPrev = element.querySelector(".slider-cinema-prev");
			let elSliderArrowNext = element.querySelector(".slider-cinema-next");
			const swiperCinema = new Swiper(elSlider, {
				slidesPerView: 5,
				spaceBetween: 15,
				watchOverflow: true,

				navigation: {
					nextEl: elSliderArrowNext,
					prevEl: elSliderArrowPrev,
				},

				// Responsive breakpoints
				breakpoints: {
					// when window width is <= 480px
					1550: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
					900: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					700: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					450: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// when window width is <= 320px
					300: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
				},
			});
		});
	}
});

$(document).ready(function () {
	$(".cinema-header__switch").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass("--white")) {
			$(this).removeClass("--white");
			$(this).addClass("--dark");
		} else {
			$(this).addClass("--white");
			$(this).removeClass("--dark");
		}
	});

	$(".cinema-card__showOther").on("click", function () {
		$(this).slideUp();
		$(this).next(".cinema-card__other-block").slideDown();
	});

	if ($(window).width() > 1200) {
		$(".search-box__item").css({ width: `${$(".header__menu").innerWidth() + $(".search-box").innerWidth()}` });
	} else {
		$(".search-box__item").css({ width: "100%" });
	}

	$(window).on("resize", function () {
		if ($(window).width() > 1200) {
			$(".search-box__item").css({ width: `${$(".header__menu").innerWidth() + $(".search-box").innerWidth()}` });
		} else {
			$(".search-box__item").css({ width: "100%" });
		}
	});

	$(document).mouseup(function (e) {
		var container = $(".search-box__item");
		if ($(window).width() > 1200) {
			if (container.has(e.target).length === 0) {
				$(".search-box__show-block").removeClass("--hidden");
				container.slideUp();
			}
		}
	});

	$(".search-box__show-block").on("click", function () {
		$(this).addClass("--hidden");
		$(".search-box__item").slideDown();
	});

	if ($(".online-crew__list-item").length > 7) {
		$(".online-crew__list").append("<a class='online-crew__more'><span>Ещё</span></a>");

		$.each($(".online-crew__list-item"), function (index, val) {
			if (index > 6) {
				$(val).css({ display: "none" });
			}
		});

		$(".online-crew__more").on("click", function (e) {
			e.preventDefault();
			let button = $(this);
			$.each($(".online-crew__list-item"), function (index, val) {
				if (index > 6) {
					if ($(val).is(":hidden")) {
						$(val).fadeIn();
						button.find("span").text("Скрыть");
					} else {
						$(val).fadeOut();
						button.find("span").text("Еще");
					}
				}
			});
		});
	}

	$(".cinema-text").readmore({
		moreLink: '<button class="spoiler-text btn-border btn-border--white"><svg viewBox="0 0 200 50"><rect x="1" y="0" fill="none" rx="25" ry="25" width="98%" height="100%"></rect></svg><span>Показать еще</span></button>',
		lessLink: '<button class="spoiler-text btn-border btn-border--white"><svg viewBox="0 0 200 50"><rect x="1" y="0" fill="none" rx="25" ry="25" width="98%" height="100%"></rect></svg><span>Свернуть</span></button>',
		collapsedHeight: 200,
		speed: 100,

		afterToggle: function (trigger, element, expanded) {
			if ($(element).hasClass("readmore-js-collapsed")) {
				$(element).removeClass("readmore-js-collapsed");
			} else {
				$(element).addClass("readmore-js-collapsed");
			}
		},
	});

	// $(".online-review__review").readmore({
	//     moreLink: '<button class="online-review__button-more"><span>Читать полностью...</span></button>',
	//     lessLink: '<button class="online-review__button-more"><span>Скрыть</span></button>',
	//     collapsedHeight: 80,
	//     speed: 100,

	//     afterToggle: function (trigger, element, expanded) {
	//       if ($(element).hasClass("readmore-js-collapsed")) {
	//         $(element).removeClass("readmore-js-collapsed");
	//       } else {
	//         $(element).addClass("readmore-js-collapsed");
	//       }
	//     },
	//   });

	$.each($(".online-review__item"), function (index, val) {
		let elTextWrap = $(val).find(".online-review__review-text");
		let elTextAll = elTextWrap.text();
		let elTextSub = elTextAll.substring(0, 350);
		if (elTextAll.length > 350) {
			$(val).addClass("--hidden");

			elTextWrap.text(elTextSub + "...");

			$(val).find(".online-review__review").append("<div class='online-review__review-all'>Читать полностью...</div>");

			$(val)
				.find(".online-review__review-all")
				.on("click", function () {
					if ($(val).hasClass("--hidden")) {
						elTextWrap.text(elTextAll);
						$(val).removeClass("--hidden");

						$(this).text("Скрыть...");
					} else {
						elTextWrap.text(elTextSub + "...");
						$(val).addClass("--hidden");

						$(this).text("Читать полностью...");
					}
				});
		}
	});

	if ($(".online-review__item").length > 3) {
		$(".online-review__block").append("<div class='online-review__more-block'><div class='online-review__more'><span>показать еще</span></div></div>");

		$.each($(".online-review__item"), function (index, val) {
			if (index > 2) {
				$(val).css({ display: "none" });
			}
		});

		$(".online-review__more-block").on("click", function (e) {
			e.preventDefault();
			let button = $(this);
			$.each($(".online-review__item"), function (index, val) {
				if (index > 2) {
					if ($(val).is(":hidden")) {
						$(val).fadeIn();
						button.find("span").text("Скрыть");
					} else {
						$(val).fadeOut();
						button.find("span").text("Показать еще");
					}
				}
			});
		});
	}

	// let gallerySliders = Array.prototype.slice.call(document.querySelectorAll(".main-galery"));

	// if (gallerySliders.length > 0) {
	//     gallerySliders.forEach((element) => {
	//         let slidesGallery = element.querySelectorAll(".main-galery__list-item");

	//         let slidesPer = "auto";
	//         let initSlide = 1;
	//         let centerSlide = true;
	//         let sliderLoop = true;

	//         let sliderMainGalery = new Swiper(element.querySelector(".main-galery-slider"), {
	//             slidesPerView: slidesPer,
	//             spaceBetween: 15,
	//             centeredSlides: centerSlide,
	//             initialSlide: initSlide,
	//             loop: sliderLoop,
	//             watchOverflow: true,

	//             navigation: {
	//                 nextEl: element.querySelector(".main-galery__next"),
	//                 prevEl: element.querySelector(".main-galery__prev"),
	//             },
	//             pagination: {
	//                 el: element.querySelector(".main-galery__pagination"),
	//                 clickable: true,
	//             },
	//         });
	//     });
	// }
});
