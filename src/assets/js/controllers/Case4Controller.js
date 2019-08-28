var case4Controller = {};

$(document).ready(function() {
	case4Controller.init();	
})

case4Controller.init = function() {
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

	$("#mid-fidelity-button").click(() => {
		window.open("https://invis.io/2MT6P7LU5Q6"); 
	})

	$("#other_case1_link").click(() => {
		router.goToCase1Page();
	})

	$("#other_case2_link").click(() => {
		router.goToCase2Page();
	})

	$("#other_case3_link").click(() => {
		router.goToCase3Page();
	})

	$("#other_case_daily_link").click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})

	$(window).resize(function() {
		case4Controller.resizeStupidIframe();
	})
	case4Controller.resizeStupidIframe();
}

case4Controller.iframeOriginalWidth = 442;
case4Controller.iframeOriginalHeight = 935;
case4Controller.bigScreenSideOffset = 300;
case4Controller.sideMarginsPercentage = 0.13;
case4Controller.responsivePixelTreshold = 900;
case4Controller.responsivePixelTresholdMax = 1400;

case4Controller.resizeStupidIframe = function() {
	var containerSize = (($( window ).width()*(1 - 2 * case4Controller.sideMarginsPercentage)));
	if ($(window).width() > case4Controller.responsivePixelTreshold) {
		containerSize = containerSize - case4Controller.bigScreenSideOffset;
	}
	if ($(window).width() >= case4Controller.responsivePixelTresholdMax) {
		containerSize = ((case4Controller.responsivePixelTresholdMax*(1 - 2 * case4Controller.sideMarginsPercentage))) - case4Controller.bigScreenSideOffset;
	}
	containerSize = containerSize / 2; // divide by 2 because we have the <ul> next to the iframe which takes half the space
	var transformRatio = (containerSize / case4Controller.iframeOriginalWidth);
	$(".proto_iframe").css('transform', 'scale(' + transformRatio + ')');
	$(".case_ul_1").css('height', Math.floor(case4Controller.iframeOriginalHeight * transformRatio) + 'px');
	$(".case_ul_2").css('height', Math.floor(case4Controller.iframeOriginalHeight * transformRatio) + 'px');
}

