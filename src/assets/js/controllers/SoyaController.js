var case2Controller = {};

$(document).ready(function() {
	case2Controller.init();	

	window.scrollTo(0,0);
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
		//scroll to bottom
		$([document.documentElement, document.body]).animate({
        	scrollTop: $("#hi_fidelity_anchor").offset().top
    	}, 100);
	})
}

