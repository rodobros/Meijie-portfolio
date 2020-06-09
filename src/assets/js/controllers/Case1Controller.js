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
        	scrollTop: $("#section3").offset().top
    	}, 100);
	})

	$("#other_case2_link").click(() => {
		router.goToCase2Page();
	})

	$("#other_case3_link").click(() => {
		router.goToCase3Page();
	})

	$("#other_case4_link").click(() => {
		router.goToCase4Page();
	})

	$("#other_case_daily_link").click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})
}

//case1Controller.init();