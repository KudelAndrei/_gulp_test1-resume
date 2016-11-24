$(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights();

	//Слайдер
	$(".sl").slick({
		arrows: true,
		dots: true,
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
