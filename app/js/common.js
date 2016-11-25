$(function() {

	// ВЫравнивание блоков по высоте
	$(".conditions .card figcaption").equalHeights();

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
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
		]
	});

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
