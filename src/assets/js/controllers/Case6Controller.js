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
        "section7",
        "section8"]);	

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
		case6Controller.resizeStupidIframe();
	})
	case6Controller.resizeStupidIframe();
}

case6Controller.iframeOriginalWidth = 442;
case6Controller.iframeOriginalHeight = 935;
case6Controller.bigScreenSideOffset = 300;
case6Controller.sideMarginsPercentage = 0.13;
case6Controller.responsivePixelTreshold = 900;
case6Controller.responsivePixelTresholdMax = 1400;

case6Controller.resizeStupidIframe = function() {
	var containerSize = (($( window ).width()*(1 - 2 * case6Controller.sideMarginsPercentage)));
	if ($(window).width() > case6Controller.responsivePixelTreshold) {
		containerSize = containerSize - case6Controller.bigScreenSideOffset;
	}
	if ($(window).width() >= case6Controller.responsivePixelTresholdMax) {
		containerSize = ((case6Controller.responsivePixelTresholdMax*(1 - 2 * case6Controller.sideMarginsPercentage))) - case6Controller.bigScreenSideOffset;
	}
	containerSize = containerSize / 2; // divide by 2 because we have the <ul> next to the iframe which takes half the space
	var transformRatio = (containerSize / case6Controller.iframeOriginalWidth);
	$(".proto_iframe").css('transform', 'scale(' + transformRatio + ')');
	$(".case_ul_1").css('height', Math.floor(case6Controller.iframeOriginalHeight * transformRatio) + 'px');
	$(".case_ul_2").css('height', Math.floor(case6Controller.iframeOriginalHeight * transformRatio) + 'px');
}

