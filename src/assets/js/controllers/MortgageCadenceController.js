var MortgageCadenceController = {};

$(document).ready(function() {
	MortgageCadenceController.init();	
})

MortgageCadenceController.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",
		"section5",
		"section6",]);
}
