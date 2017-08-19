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
});


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

	if ($(elementClick).length != 0 ) {
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


// Active menu on scroll
var lastId,
		topMenu = $('.main-menu'),
		topMenuHeight = topMenu.outerHeight() + 40,
		// All list items
		menuItems = topMenu.find('a'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr('href'));
			if (item.length) { return item; }
		});

//Bind click handler to menu items
//so we can get a fancy scroll animation
// menuItems.click(function(e){
// 	var href = $(this).attr('href'),
// 		offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
// 	$('html, body').stop().animate({ 
// 			scrollTop: offsetTop
// 	}, 300);
// 	e.preventDefault();
// });

// Bind to scroll
$(window).scroll(function(){
	// Get container scroll position
	var fromTop = $(this).scrollTop() + topMenuHeight;
	// Get id of current scroll item
	var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
			return this;
	});
	// Get the id of the current element
	cur = cur[cur.length - 1];
	var id = cur && cur.length ? cur[0].id : "";
	if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
			.parent().removeClass('active')
			.end().filter("[href='#" + id + "']").parent().addClass('active');
	}
});

});
