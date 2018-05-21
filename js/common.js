$(function() {

	// ToTopButton
	$(window).scroll(function () {
		
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}

		else {
			$('.top').removeClass('active');
		}

	});
	$('.top').click(function () {
		$('html,body').stop().animate({scrollTop:0}, 'slow', 'swing');
	});

	// POPUP-SERVICES
	$('.popup__services').magnificPopup({type:'inline', midClick: true});

	// PRELOADER
	$(window).on('load', function () {
		$('.preloader').delay(1000).fadeOut('slow');
	});

	// BUTTON-MENU
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".nav ul li a span").click(function() {
		$(".nav").fadeOut(600);
		$(".sandwich").toggleClass("active");

	});

	// BUTTON-MENU_NAV
	$(".nav ul a").click(function() {
		$(".nav").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".nav").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".nav").fadeOut(600);
			$(".nav li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".nav").fadeIn(600);
			$(".nav li a").addClass("fadeInUp animated");
		};
	});

});
