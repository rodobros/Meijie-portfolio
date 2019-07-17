var case3Controller = {};

$(document).ready(function() {
	case3Controller.init();	
})

case3Controller.init = function() {
	headerController.setCaseSelected();
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
        	scrollTop: $("#embeded_proto").offset().top
    	}, 100);
	})

	$("#other_case1_link").click(() => {
		router.goToCase1Page();
	})

	$("#other_case2_link").click(() => {
		router.goToCase2Page();
	})

	$("#other_case4_link").click(() => {
		//router.goToCase4Page();
	})

	$("#other_case_daily_link").click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})
}

