var case5Controller = {};

$(document).ready(function() {
	case5Controller.init();	
})

case5Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".header-container").offset().top
 }, 2);
}

