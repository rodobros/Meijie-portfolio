var case5Controller = {};

$(document).ready(function() {
	case5Controller.init();	
})

case5Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
}

