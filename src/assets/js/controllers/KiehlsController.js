var case5Controller = {};

$(document).ready(function() {
	case5Controller.init();	

	window.scrollTo(0,0);
})

case5Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
}

