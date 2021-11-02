var onMoDesignController = {};

$(document).ready(function() {
	onMoDesignController.init();
})

onMoDesignController.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
}
