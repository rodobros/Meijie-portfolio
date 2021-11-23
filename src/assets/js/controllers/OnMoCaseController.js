var onMoCaseController = {};

$(document).ready(function() {
	onMoCaseController.init();	
})

onMoCaseController.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",
        "section5",]);
}
