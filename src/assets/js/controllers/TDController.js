var TDController = {};

$(document).ready(function() {
	TDController.init();	
})

TDController.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
}
