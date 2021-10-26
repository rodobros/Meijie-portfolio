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
        "section5",
        "section6",]);
        
    $("#test_prototype_button").click(() => {
        //scroll to bottom
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".proto_iframe").offset().top
        }, 100);
	})
	
	$(window).resize(function() {
		PrototypeFrameResizer.init("invision", ".proto_iframe");
		PrototypeFrameResizer.resize();
	})

	PrototypeFrameResizer.init("invision", ".proto_iframe");
	PrototypeFrameResizer.resize();
}