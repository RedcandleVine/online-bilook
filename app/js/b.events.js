// // fn
// function eventUrlUpdate(loc) {
// 	try {
// 		history.pushState(null, null, loc);
// 		return;
// 	} catch (e) {}
// 	location.hash = "#" + loc;
// }

// function eventFilterUpdate() {
// 	/*
// 	if ($(".filter-date-set.active")) {
// 		$("#filter-date-current").text($(".filter-date-set.active").data("name"));
// 	}
// 	*/
// 	$(".prop-wrapper,.place-wrapper").each(function () {
// 		let $$ = $(this),
// 			snap = $$.data("snap"),
// 			c = 0;
// 		$("input:checked", $$).each(function () {
// 			c++;
// 		});
// 		$("em[data-snap='" + snap + "']").text(c ? "{ " + c + " }" : "");
// 	});
// }

// function eventFilterSet(output) {
// 	let filter = [];
// 	// date filter
// 	if ($(".datepicker-wrapper").length) {
// 		let range = pickmeup("#filter-date-datepicker").get_date(true);
// 		if (!(current_date == range[0] && current_date == range[1])) {
// 			if (filter_preset == "default") {
// 			} else if (filter_preset !== false) {
// 				filter.push("[date:" + filter_preset + "]");
// 			} else if (range[0] != range[1]) {
// 				filter.push("[date:" + range[0] + ":" + range[1] + "]");
// 			} else {
// 				filter.push("[date:" + range[0] + "]");
// 			}
// 		}
// 	}
// 	// place filter
// 	let placefilter = {};
// 	$(".place-wrapper input:checked").each(function () {
// 		let $$ = $(this);
// 		if (placefilter[$$.attr("name")] != undefined) {
// 			placefilter[$$.attr("name")] = placefilter[$$.attr("name")] + "," + $$.val();
// 		} else {
// 			placefilter[$$.attr("name")] = $$.val();
// 		}
// 	});
// 	$.each(placefilter, function (index, value) {
// 		if (value != undefined) filter.push("[" + index + ":" + value + "]");
// 	});
// 	// prop filter
// 	let propfilter = {};
// 	$(".prop-wrapper input:checked").each(function () {
// 		let $$ = $(this);
// 		if (propfilter[$$.attr("name")] != undefined) {
// 			propfilter[$$.attr("name")] = propfilter[$$.attr("name")] + "," + $$.val();
// 		} else {
// 			propfilter[$$.attr("name")] = $$.val();
// 		}
// 	});
// 	$.each(propfilter, function (index, value) {
// 		if (value != undefined) filter.push("[" + index + ":" + value + "]");
// 	});
// 	let filter_str = filter.length ? filter.join("") : "";
// 	if (output) {
// 		$.ajax({
// 			url: "/ajax/",
// 			cache: false,
// 			data: {
// 				mode: $("#ajax-filter-url").data("mode"),
// 				force_pagination: 1,
// 				filters: filter_str,
// 				page: 0,
// 			},
// 			type: "post",
// 			dataType: "text",
// 			success: function (response) {
// 				let html = $("<div></div>").html(response);
// 				let data = html.find("#ajax-temp");
// 				if (!data.length) {
// 					$("#ajax-container").html(response);
// 				} else {
// 					$("#ajax-pagination-more,#ajax-pagination-container").html("");
// 					let pagination = html.find("#ajax-pagination-container"),
// 						pagination_more = html.find("#ajax-pagination-more");
// 					$("#ajax-container").html(data.html());
// 					$("#ajax-pagination-container").html(pagination.html());
// 					$("#ajax-pagination-more").html(pagination_more.html());
// 				}
// 			},
// 		});
// 		let url = filter.length ? filter_default_url + "filters" + filter_str + "/" : filter_default_url;
// 		eventFilterUpdate();
// 		eventUrlUpdate(url);
// 	} else {
// 		return filter_str;
// 	}
// }

// // plugins
// pickmeup.defaults.locales["ru"] = {
// 	days: ["Р’РѕСЃРєСЂРµСЃРµРЅСЊРµ", "РџРѕРЅРµРґРµР»СЊРЅРёРє", "Р’С‚РѕСЂРЅРёРє", "РЎСЂРµРґР°", "Р§РµС‚РІРµСЂРі", "РџСЏС‚РЅРёС†Р°", "РЎСѓР±Р±РѕС‚Р°"],
// 	daysShort: ["Р’СЃ", "РџРЅ", "Р’С‚", "РЎСЂ", "Р§С‚", "РџС‚", "РЎР±"],
// 	daysMin: ["Р’СЃ", "РџРЅ", "Р’С‚", "РЎСЂ", "Р§С‚", "РџС‚", "РЎР±"],
// 	months: ["РЇРЅРІР°СЂСЊ", "Р¤РµРІСЂР°Р»СЊ", "РњР°СЂС‚", "РђРїСЂРµР»СЊ", "РњР°Р№", "РСЋРЅСЊ", "РСЋР»СЊ", "РђРІРіСѓСЃС‚", "РЎРµРЅС‚СЏР±СЂСЊ", "РћРєС‚СЏР±СЂСЊ", "РќРѕСЏР±СЂСЊ", "Р”РµРєР°Р±СЂСЊ"],
// 	monthsShort: ["РЇРЅРІ", "Р¤РµРІ", "РњР°СЂ", "РђРїСЂ", "РњР°Р№", "РСЋРЅ", "РСЋР»", "РђРІРі", "РЎРµРЅ", "РћРєС‚", "РќРѕСЏ", "Р”РµРє"],
// };

// pickmeup("#filter-date-datepicker", {
// 	locale: "ru",
// 	format: "Y-m-d",
// 	prev: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
// 	next: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
// 	select_month: false,
// 	select_year: false,
// 	min: new Date(),
// 	flat: true,
// 	calendars: 2,
// 	mode: "range",
// });

// if ($(".slider-combined").length) {
// 	const swpEventsOther = new Swiper(".slider-combined", {
// 		slidesPerView: 4,
// 		slidesPerGroup: 1,
// 		spaceBetween: 10,
// 		navigation: {
// 			nextEl: ".combined-a .swiper-button-next",
// 			prevEl: ".combined-a .swiper-button-prev",
// 		},
// 		// Responsive breakpoints
// 		breakpoints: {
// 			// when window width is <= 480px
// 			1550: {
// 				slidesPerView: 4,
// 				spaceBetween: 20,
// 			},
// 			900: {
// 				slidesPerView: 3,
// 				spaceBetween: 20,
// 			},
// 			700: {
// 				slidesPerView: 2,
// 				spaceBetween: 20,
// 			},
// 			// when window width is <= 320px
// 			300: {
// 				slidesPerView: 1,
// 				spaceBetween: 10,
// 			},
// 		},
// 	});
// }

// if ($(".slider-combined-2").length) {
// 	const swpEventsOther = new Swiper(".slider-combined-2", {
// 		slidesPerView: 4,
// 		slidesPerGroup: 1,
// 		spaceBetween: 10,
// 		navigation: {
// 			nextEl: ".combined-b .swiper-button-next",
// 			prevEl: ".combined-b .swiper-button-prev",
// 		},
// 		// Responsive breakpoints
// 		breakpoints: {
// 			// when window width is <= 480px
// 			1550: {
// 				slidesPerView: 4,
// 				spaceBetween: 20,
// 			},
// 			900: {
// 				slidesPerView: 3,
// 				spaceBetween: 20,
// 			},
// 			700: {
// 				slidesPerView: 2,
// 				spaceBetween: 20,
// 			},
// 			// when window width is <= 320px
// 			300: {
// 				slidesPerView: 1,
// 				spaceBetween: 10,
// 			},
// 		},
// 	});
// }

$(".filter-wrapper.prop-wrapper, .filter-wrapper.place-wrapper .filter-wrapper-scroll").mCustomScrollbar({
	theme: "dark-thick",
	setHeight: "255",
	axis: "y",
});

// // triggers
// var filter_default_url = $("#ajax-filter-url").val(),
// 	filter_date_datepicker = $("#filter-date-datepicker"),
// 	current_date = $("#filter-date-current").data("from"),
// 	filter_preset = "default";

// $("#filter-date-datepicker").bind("pickmeup-change", function (e) {
// 	filter_preset = false;
// 	eventFilterSet(true);
// });

// $(".filter-date-set").click(function (e) {
// 	e.preventDefault();
// 	let $$ = $(this);
// 	$(".filter-date-set").removeClass("active");
// 	if ($$.data("to") !== undefined) {
// 		pickmeup("#filter-date-datepicker").set_date([$$.data("from"), $$.data("to")]);
// 	} else {
// 		pickmeup("#filter-date-datepicker").set_date($$.data("from"));
// 	}
// 	filter_preset = $$.data("preset");
// 	$$.addClass("active");
// 	$(".filter-wrapper").removeClass("active");
// 	eventFilterSet(true);
// });

// $(".filter-date-set-custom").click(function (e) {
// 	e.preventDefault();
// 	filter_preset = false;
// 	$(".filter-wrapper").removeClass("active");
// 	eventFilterSet(true);
// });

// $(".filter-prop-set")
// 	.on("mousedown", function (e) {
// 		e.preventDefault();
// 	})
// 	.click(function (e) {
// 		e.preventDefault();
// 		$(".trigger-filter").removeClass("open");
// 		// $(".filter-wrapper").removeClass("active");
// 		let $$ = $(this).prev();
// 		$$.prop("checked", !$$.prop("checked"));
// 		eventFilterSet(true);
// 	});

// $(".type__item").click(function (e) {
// 	e.preventDefault();
// 	let $$ = $(this),
// 		filters = eventFilterSet(false);
// 	$$.addClass("active").siblings().removeClass("active");
// 	$.ajax({
// 		url: "/ajax/",
// 		cache: false,
// 		data: {
// 			mode: $$.data("mode"),
// 			filters: filters,
// 			page: 0,
// 			style: $$.data("id"),
// 		},
// 		type: "post",
// 		dataType: "text",
// 		success: function (response) {
// 			$("#ajax-container").removeClass().addClass("catalog").addClass($$.data("view")).html(response);
// 			$(".trigger-ajax-pagination").each(function () {
// 				let $$ = $(this);
// 				$$.data("page", 1);
// 				$$.parent().fadeIn();
// 			});
// 		},
// 	});
// });

// $(".trigger-sort").change(function () {
// 	let $$ = $(this);
// 	let filter = filter_init();
// 	$.ajax({
// 		url: "/ajax/",
// 		cache: false,
// 		data: {
// 			mode: $$.data("mode"),
// 			filter: filter,
// 			sort: $$.val(),
// 			page: $$.data("page"),
// 		},
// 		type: "post",
// 		dataType: "text",
// 		success: function (response) {
// 			$("#ajax-container").html(response);
// 		},
// 	});
// });

$(".trigger-filter").click(function (e) {
	e.preventDefault();
	let t = $(this),
		trigger = t.data("snap");
	$(".trigger-filter[data-snap='" + trigger + "']").toggleClass("open");
	$(".trigger-filter[data-snap!='" + trigger + "']").removeClass("open");
	$(".filter-wrapper[data-snap='" + trigger + "']").toggleClass("active");
	$(".filter-wrapper[data-snap!='" + trigger + "']").removeClass("active");
});

$(document).click(function (e) {
	var container = $(".sort-list__item");
	if (container.has(e.target).length === 0) {
		$(".trigger-filter").removeClass("open");
		$(".filter-wrapper").removeClass("active");
	}
});

// $("input.filter-search-input").keyup(function () {
// 	let v = $(this).val().toLowerCase(),
// 		s = $(this).data("snap");
// 	if (v.length > 0) {
// 		$('ul[data-snap="' + s + '"] > li').addClass("hidden");
// 		$('ul[data-snap="' + s + '"] > li[data-name*=' + v + "]").removeClass("hidden");
// 	} else {
// 		$('ul[data-snap="' + s + '"] > li').removeClass("hidden");
// 	}
// });

// $("body").on("click", ".trigger-ajax-pagination", function (e) {
// 	e.preventDefault();
// 	let $$ = $(this),
// 		page = $$.data("page"),
// 		limit = $$.data("limit"),
// 		sid = $$.data("sid"),
// 		filters = eventFilterSet(false);
// 	let next = page + 1;
// 	if (next == limit) {
// 		$$.parent().fadeOut();
// 	}
// 	$$.data("page", next);
// 	$.ajax({
// 		url: "/ajax/",
// 		cache: false,
// 		data: {
// 			mode: $$.data("mode"),
// 			filters: filters,
// 			page: page,
// 			sid: sid,
// 		},
// 		type: "post",
// 		dataType: "text",
// 		success: function (response) {
// 			$("#ajax-container").append(response);
// 		},
// 	});
// });

// $(".trigger-ajax-reviews").click(function (e) {
// 	e.preventDefault();
// 	let $$ = $(this),
// 		page = $$.data("page"),
// 		limit = $$.data("limit");
// 	let next = page + 1;
// 	if (next == limit) {
// 		$$.parent().fadeOut();
// 	}
// 	$$.data("page", next);
// 	$.ajax({
// 		url: "/ajax/",
// 		cache: false,
// 		data: {
// 			mode: "reviews:get",
// 			source: $$.data("source"),
// 			page: page,
// 		},
// 		type: "post",
// 		dataType: "text",
// 		success: function (response) {
// 			$("#ajax-reviews").append(response);
// 		},
// 	});
// });

// // init
// if ($(".datepicker-wrapper").length) {
// 	if (filter_date_datepicker.data("from") !== "undefined" && filter_date_datepicker.data("to") !== "undefined") {
// 		pickmeup("#filter-date-datepicker").set_date([filter_date_datepicker.data("from"), filter_date_datepicker.data("to")]);
// 		$("#filter-date-current").text("РџРµСЂРёРѕРґ: СЃРІРѕР№ РґРёР°РїР°Р·РѕРЅ");
// 	} else if (filter_date_datepicker.data("from") !== "undefined") {
// 		pickmeup("#filter-date-datepicker").set_date(filter_date_datepicker.data("from"));
// 	}
// 	eventFilterUpdate();
// }

// document.addEventListener(
// 	"DOMContentLoaded",
// 	function () {
// 		let dateSlider = new Swiper(".date-list", {
// 			slidesPerView: "auto",
// 			freeMode: true,
// 			watchOverflow: true,
// 			observer: true,
// 			observeParents: true,
// 		});
// 	},
// 	false
// );
//# sourceMappingURL=b.events.js.map
