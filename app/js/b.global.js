// vars
let bodyNode = document.body;
let footer = $(".page-footer"),
	wFlag = 0,
	menu = $(".js-menu"),
	mainSectionHeight = $(".main-section").height();
var _mask = {
	onKeyPress: function (cep, event, currentField, options) {
		if (cep == "" || cep == "+" || cep == "+7" || cep == "+7 8") {
			currentField.val("+7 ");
		}
	},
	clearIfNotMatch: true,
};

// fn
$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
		this.addClass("animated " + animationName).one(animationEnd, function () {
			$(this).removeClass("animated " + animationName);
		});
	},
});

function check(form) {
	let err = 0;
	form.find("input[data-required=true]").each(function (index) {
		let $$ = $(this);
		if ($$.attr("type") == "checkbox" && !$$.prop("checked")) {
			$$.addClass("error").animateCss("flash");
			err++;
		}
		if ($$.attr("type") == "tel" && $$.val().length != 16) {
			$$.addClass("error").animateCss("shake");
			err++;
		} else if ($$.val() == "" && $$.attr("disabled") != "disabled") {
			$$.addClass("error").animateCss("shake");
			err++;
		} else $$.removeClass("error");
	});
	let t = $(".error", form);
	if (t.length) {
		$("body,html").animate(
			{
				scrollTop: t.offset().top - 10,
			},
			700
		);
	}
	return err;
}

function modal(data) {
	$("#modal").html(data);
	$(".modal__frame, #js-overlay").fadeIn(500);
	$("#js-overlay").addClass("overlay--modal");
	$("body").addClass("open-modal");
}

// plugins

$(".mobile-menu").on("click", function (e) {
	e.preventDefault();
	if (!$(".mobile-menu-top").hasClass("open-menu")) {
		$(".mobile-menu-top").addClass("open-menu");
		$(this).addClass("open-menu");
		$("html").addClass("lock");

		$(this).find("span:nth-child(1)").css({ animation: "ease 0.7s top forwards" });
		$(this).find("span:nth-child(2)").css({ animation: "ease 0.7s scaled forwards" });
		$(this).find("span:nth-child(3)").css({ animation: "ease 0.7s bottom forwards" });
	} else {
		$(".mobile-menu-top").removeClass("open-menu");
		$(this).removeClass("open-menu");
		$("html").removeClass("lock");
		$(this).find("span:nth-child(1)").css({ animation: "ease 0.7s top-2 forwards" });
		$(this).find("span:nth-child(2)").css({ animation: "ease 0.7s scaled-2 forwards" });
		$(this).find("span:nth-child(3)").css({ animation: "ease 0.7s bottom-2 forwards" });
	}
});

$(window).scroll(function (e) {
	if ($(this).scrollTop() > 0) {
		$("#scroller").fadeIn();
	} else {
		$("#scroller").fadeOut();
	}
});

$("#scroller").click(function (e) {
	e.preventDefault();
	$("body,html").animate({ scrollTop: 0 }, 400);
});

$(".mh-head.mm-sticky").mhead({
	scroll: {
		hide: 200,
	},
});

$(".mh-head:not(.mm-sticky)").mhead({
	scroll: false,
});

// $(".regions__wrapper").mCustomScrollbar({

// 	theme: "dark-thick",
// 	axis: "x",
// 	advanced: {
// 		autoExpandHorizontalScroll: true,
// 	},
// });

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

$("select").niceSelect();

// $("input[type=tel]").mask("+7 000 000-00-00", _mask);

// hooks
var sc = false;
$(document).on("scroll", function () {
	let documentScroll = $(this).scrollTop();
	if (documentScroll > 0) {
		if (!sc) {
			menu.addClass("fixed");
			sc = true;
		}
	} else {
		sc = false;
		menu.removeClass("fixed");
	}
});

$(window).scroll(function () {
	let scroll = $(window).scrollTop() + $(window).height();
	let offset = footer.offset().top;
	if (scroll > offset && wFlag == 0) {
		$(".js-menu").fadeOut(500);
		wFlag = 1;
	} else if (scroll < offset && wFlag == 1) {
		$(".js-menu").fadeIn(500);
		wFlag = 0;
	}
});

// triggers
$(".js-menu").hover(
	function () {
		$(this).addClass("active");
		$("#js-overlay").fadeIn(100);
	},
	function () {
		$(this).removeClass("active");
		$("#js-overlay").fadeOut(100);
	}
);

$(".smart-scroll").click(function (e) {
	e.preventDefault();
	console.log();

	if ($($(this).attr("href")).length > 0) {
		$("body,html").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top - 100,
			},
			700
		);
	} else {
		$("body,html").animate(
			{
				scrollTop: $("#area_dates").offset().top - 100,
			},
			700
		);
	}
});

$(".js-profile").on("click", function (e) {
	e.preventDefault();
	let $$ = $(this),
		bm = $$.data("behavior");
	if (bm == "popup") {
		$("#float-profile").toggleClass("open-profile");
	} else {
		$("#side-profile").toggle();
	}
	$$.toggleClass("open");
});

$("body")
	.on("click", "#js-overlay, .js-modal-close", function (e) {
		e.preventDefault();
		$(".modal__frame, #js-overlay").fadeOut(100);
		$("#js-overlay").removeClass("overlay--modal");
		$("body").removeClass("open-modal");
	})
	.on("click", ".trigger-modal", function (e) {
		var mode = $(this).data("modal"),
			id = $(this).data("id");
		if ($("a.js-profile").length && mode == "auth") {
			return true;
		} else {
			e.preventDefault();
			// mmenu.close();
			$(".mobile-menu-top").removeClass("open-menu");
			$(".mobile-menu").removeClass("open-menu");
			$("html").removeClass("lock");
			$(".mobile-menu").find("span:nth-child(1)").css({ animation: "ease 0.7s top-2 forwards" });
			$(".mobile-menu").find("span:nth-child(2)").css({ animation: "ease 0.7s scaled-2 forwards" });
			$(".mobile-menu").find("span:nth-child(3)").css({ animation: "ease 0.7s bottom-2 forwards" });
			$.ajax({
				url: "/ajax/",
				cache: false,
				data: {
					mode: mode + ":get",
					url: $(this).data("url"),
					id: id,
				},
				type: "post",
				dataType: "text",
				success: function (data) {
					if (data != "") modal(data);
				},
			});
		}
	})
	.on("click", ".trigger-send", function (e) {
		e.preventDefault();
		let form = $(this).closest("form"),
			result = $("p", form), overwrite = $("#result");
		if (!check(form)) {
			$.ajax({
				url: "/ajax/",
				cache: false,
				data: form.serialize(),
				type: "post",
				dataType: "text",
				success: function (response) {
					let output = JSON.parse(response);
					if (output.result == "success") {
						window.location.assign(output.redirect);
					} else if (output.result == "reload") {
						window.location.assign(window.location.href);
					} else if (output.result == "overwrite") {
						overwrite.html(output.overwrite);
					}else {
						result.text(output.reason);
					}
				},
			});
		}
	})
	.on("click", ".trigger-wishlist", function (e) {
		e.preventDefault();
		let $$ = $(this),
			c = Number($("#user_wishlist_counter").text());
		if ($$.hasClass("favorite-action")) {
			$$.toggleClass("liked");
			if ($$.hasClass("liked")) c++;
			else c--;
		} else {
			$$.parent().toggleClass("active");
			if ($$.parent().hasClass("active")) c++;
			else c--;
		}
		$("#user_wishlist_counter").text(c);
		$.ajax({
			url: "/ajax/",
			cache: false,
			data: {
				mode: "events:wishlist",
				guid: $$.data("id"),
			},
			type: "post",
			dataType: "text",
			success: function (data) {
				if (data != "") modal(data);
			},
		});
	})
	.on("click", ".trigger-visited", function (e) {
		e.preventDefault();
		let $$ = $(this),
			c = Number($("#user_visited_counter").text());
		$$.parent().toggleClass("active");
		if ($$.parent().hasClass("active")) c++;
		else c--;
		$("#user_visited_counter").text(c);
		$.ajax({
			url: "/ajax/",
			cache: false,
			data: {
				mode: "events:visited",
				guid: $$.data("id"),
			},
			type: "post",
			dataType: "text",
			success: function (data) {
				if (data != "") modal(data);
			},
		});
	})
	.on("change", 'input[name="profile[phone][]"]', function (e) {
		let $$ = $(this),
			container = $$.parent().parent();
		if ($$.val().length < 16 && $$.data("saved")) {
			container.remove();
		} else if ($$.val().length == 16 && $$.data("new")) {
			let clone = container.clone();
			$("input", clone).val("").mask("+7 000 000-00-00", _mask);
			container.after(clone);
			$$.attr("data-saved", true);
		}
	})
	.on("change", 'input[name="profile[email][]"]', function (e) {
		let $$ = $(this),
			container = $$.parent().parent();
		if ($$.val().length < 1 && $$.data("saved")) {
			container.remove();
		} else if ($$.val().length > 1 && $$.data("new")) {
			let clone = container.clone();
			$("input", clone).val("");
			container.after(clone);
			$$.attr("data-saved", true);
		}
	})
	.on("keyup", "#city-input", function (e) {
		var v = $(this).val().toLowerCase();
		if (v.length > 0) {
			$(".city-link").parent().addClass("hidden");
			$(".city-link[data-domain^=" + v + "]")
				.parent()
				.removeClass("hidden");
		} else {
			$(".city-link").parent().removeClass("hidden");
		}
	});

$("#ajax-reviews").on("click", ".trigger-more", function (e) {
	e.preventDefault();
	let $$ = $(this),
		container = $$.parent().parent();
	$$.remove();
	$(".review-block__descr", container).hide();
	$(".review-block__full", container).show();
});

$("#modal").on("click", ".btn", function (e) {
	e.preventDefault();
	$(".form-signin").toggleClass("form-signin-left");
	$(".form-signup").toggleClass("form-signup-left");
	$(".signup-inactive").toggleClass("signup-active");
	$(".signin-active").toggleClass("signin-inactive");
	$(this).removeClass("idle").addClass("active");
});

$("#city-input").on("keyup", function () {
	var value = $(this).val().toLowerCase();
	$("#cities li").filter(function () {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	});
});

bodyNode.onload = function () {
	bodyNode.classList.add("endLoad");
};

$(window).scroll(function () {
	if ($(this).scrollTop() > 95) {
		$(".page-header").addClass("fixed");

		$(".page-header")
			.next()
			.css({ "margin-top": $(".page-header").outerHeight(true) });
	} else if ($(this).scrollTop() < 1) {
		$(".page-header").removeClass("fixed");

		$(".page-header").next().css({ "margin-top": "0px" });
	}
});

// console.log($("#debug").val());

//# sourceMappingURL=b.global.js.map
