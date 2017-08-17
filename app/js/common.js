$(window).on('load', function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut(100); 
});

$(function() {


//toggle button
$('.toggle-btn').on('click', function() {
	$(this).toggleClass('on');
	$('.main-menu').slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '768') {
		$('.main-menu').removeAttr('style');
		$('.toggle-btn').removeClass('on');
	}
});


//Swiper slider
var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	pagination: '.swiper-pagination',
	paginationClickable: true,
	paginationHide: false
})


/*To top button*/
$('.to-top').on('click', function() {
	$('body, html').animate({ scrollTop:0 },800);
	return false;
});

$(window).scroll(function() {
	if($(this).scrollTop() > $(window).height()) {
		$('.to-top').fadeIn();
	} else {
		$('.to-top').fadeOut();
	}
});


/*Scroll to block*/
$('.main-menu a').on('click', function () {

	var elementClick = $(this).attr('href');
	var destination = $(elementClick).offset().top;

	if ($(elementClick).length != 0) {
		$('html, body').animate({ scrollTop: destination - 80 }, 800);
	}

	$('.main-menu').removeAttr('style');
	$('.toggle-btn').removeClass('on');

	return false; 
});


// Fixed Header
$(window).scroll(function() {
	if($(this).scrollTop() >= 30) {
		$('.header-nav-wrapper').addClass('header-nav-wrapper--fixed');
		$('.header-section').addClass('header-section--fixed');
	}
	else{
		$('.header-nav-wrapper').removeClass('header-nav-wrapper--fixed');
		$('.header-section').removeClass('header-section--fixed');
	}
});


});
