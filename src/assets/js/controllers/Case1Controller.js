var case1Controller = {};

$(document).ready(function() {
	case1Controller.init();
})

case1Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",
		"section5",]);	

	$("#test_prototype_button").click(() => {
		window.open("https://invis.io/43SR9TVVMK7");
	})
}

//case1Controller.init();