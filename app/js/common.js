$(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	//Слайдер
	

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
