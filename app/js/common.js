$(function() {

	// ВЫравнивание блоков по высоте
	$(".conditions .card div").equalHeights();

	//Слайдер
	$(".sl").slick({
		arrows: true,
		dots: true,
		prevArrow: '<div class="sl-next"></div>', // можем вставить любой элемент
		nextArrow: '<div class="sl-prev"></div>', //по дефолту
		dotsClass: "slick-dots",
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		},
		]
	});


	//Слайдер
	$(".sl-comments").slick({
		arrows: true,
		prevArrow: '<div class="comments-prev"></div>', // можем вставить любой элемент
		nextArrow: '<div class="comments-next"></div>', //по дефолту
		slidesToShow: 2,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		},
		]
	});

	$('.parallax-window').parallax();

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
