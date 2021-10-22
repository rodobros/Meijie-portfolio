var case8Controller = {};

$(document).ready(function() {
	case8Controller.init();	
})

case8Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",
        "section5",
        "section6",
        "section7",]);	
}
