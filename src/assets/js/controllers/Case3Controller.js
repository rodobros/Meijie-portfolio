var case3Controller = {};

$(document).ready(function() {
	case3Controller.init();	
})

case3Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.makeImageNotScrollable = false;
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",
		"section5",]);	

	$("#test_prototype_button").click(() => {
		//scroll to bottom
		$([document.documentElement, document.body]).animate({
        	scrollTop: $(".proto_iframe").offset().top
    	}, 100);
	})

	$("#other_case1_link").click(() => {
		router.goToCase1Page();
	})

	$("#other_case2_link").click(() => {
		router.goToCase2Page();
	})

	$("#other_case4_link").click(() => {
		router.goToCase4Page();
	})

	$("#other_case_daily_link").click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})

	$(window).resize(function() {
		case3Controller.resizeStupidIframe();
	})
	case3Controller.resizeStupidIframe();
}

case3Controller.iframeOriginalWidth = 442;
case3Controller.iframeOriginalHeight = 935;
case3Controller.bigScreenSideOffset = 300;
case3Controller.sideMarginsPercentage = 0.13;
case3Controller.responsivePixelTreshold = 900;
case3Controller.responsivePixelTresholdMax = 1400;

case3Controller.resizeStupidIframe = function() {
	var containerSize = (($( window ).width()*(1 - 2 * case3Controller.sideMarginsPercentage)));
	if ($(window).width() > case3Controller.responsivePixelTreshold) {
		containerSize = containerSize - case3Controller.bigScreenSideOffset;
	}
	if ($(window).width() >= case3Controller.responsivePixelTresholdMax) {
		containerSize = ((case3Controller.responsivePixelTresholdMax*(1 - 2 * case3Controller.sideMarginsPercentage))) - case3Controller.bigScreenSideOffset;
	}
	containerSize = containerSize / 2; // divide by 2 because we have the <ul> next to the iframe which takes half the space
	var transformRatio = (containerSize / case3Controller.iframeOriginalWidth);
	$(".proto_iframe").css('transform', 'scale(' + transformRatio + ')');
	$(".case_ul_1").css('height', Math.floor(case3Controller.iframeOriginalHeight * transformRatio) + 'px');
	$(".case_ul_2").css('height', Math.floor(case3Controller.iframeOriginalHeight * transformRatio) + 'px');
}

