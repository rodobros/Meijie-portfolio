var case2Controller = {};

$(document).ready(function() {
	case2Controller.init();	
})

case2Controller.init = function() {
	headerController.setCaseSelected();
	ImageOverlayManager.setUpClickListeners();
	caseSideNavManager.init(
		["section1",
		"section2",
		"section3",
		"section4",
		"section5",]);	

	$("#test_prototype_button").click(() => {
		window.open("https://invis.io/YJSSVDAB762");
	})

	$("#other_case1_link").click(() => {
		router.goToCase1Page();
	})

	$("#other_case3_link").click(() => {
		//router.goToCase3Page();
	})

	$("#other_case4_link").click(() => {
		//router.goToCase4Page();
	})

	$("#other_case_daily_link").click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})
}

//case2Controller.init();

