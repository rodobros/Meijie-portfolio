var case2Controller = {};

$(document).ready(function() {
	case2Controller.init();	
})

case2Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",]);	

	$("#test_prototype_button").click(() => {
		window.open("https://invis.io/YJSSVDAB762");
	})
}

