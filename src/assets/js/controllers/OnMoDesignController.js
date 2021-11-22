var onMoDesignController = {};

$(document).ready(function() {
	onMoDesignController.init();	
	// Next line is needed for some reason... Otherwise it doesn't start at the top.
	window.scrollTo(0,0);
})

onMoDesignController.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
}
