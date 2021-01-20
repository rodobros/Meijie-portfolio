var case1Controller = {};

$(document).ready(function() {
	case1Controller.init();
})

case1Controller.init = function() {
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
			scrollTop: $(".proto_iframe").offset().top
		}, 100);
	})

	$(window).resize(function() {
		case1Controller.resizeStupidIframe();
	})
	case1Controller.resizeStupidIframe();
}

case1Controller.iframeOriginalWidth = 442;
case1Controller.iframeOriginalHeight = 935;
case1Controller.bigScreenSideOffset = 300;
case1Controller.sideMarginsPercentage = 0.13;
case1Controller.responsivePixelTreshold = 900;
case1Controller.responsivePixelTresholdMax = 1400;

case1Controller.resizeStupidIframe = function() {
	var containerSize = (($( window ).width()*(1 - 2 * case1Controller.sideMarginsPercentage)));
	if ($(window).width() > case1Controller.responsivePixelTreshold) {
		containerSize = containerSize - case1Controller.bigScreenSideOffset;
	}
	if ($(window).width() >= case1Controller.responsivePixelTresholdMax) {
		containerSize = ((case1Controller.responsivePixelTresholdMax*(1 - 2 * case1Controller.sideMarginsPercentage))) - case1Controller.bigScreenSideOffset;
	}
	containerSize = containerSize / 2; // divide by 2 because we have the <ul> next to the iframe which takes half the space
	var transformRatio = (containerSize / case1Controller.iframeOriginalWidth);
	$(".proto_iframe").css('transform', 'scale(' + transformRatio + ')');
	$(".case_ul_1").css('height', Math.floor(case1Controller.iframeOriginalHeight * transformRatio) + 'px');
	$(".case_ul_2").css('height', Math.floor(case1Controller.iframeOriginalHeight * transformRatio) + 'px');
}
