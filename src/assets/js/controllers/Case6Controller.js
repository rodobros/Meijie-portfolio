var case6Controller = {};

$(document).ready(function() {
	case6Controller.init();	
})

case6Controller.init = function() {
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
        "section7"]);	

	$("#test_prototype_button").click(() => {
		//scroll to bottom
		$([document.documentElement, document.body]).animate({
        	scrollTop: $(".proto_iframe").offset().top
    	}, 100);
	})

	$("#mid-fidelity-button").click(() => {
		window.open("https://invis.io/2MT6P7LU5Q6"); 
	})

	$(window).resize(function() {
		PrototypeFrameResizer.init("figma", ".proto_iframe");
		PrototypeFrameResizer.resize();
	})
	PrototypeFrameResizer.init("figma", ".proto_iframe");
	PrototypeFrameResizer.resize();
}
