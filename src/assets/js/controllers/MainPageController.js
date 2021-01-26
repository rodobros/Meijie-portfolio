$(document).ready(function() {
	$("#about_me_button").click(() => {
		router.goToAboutPage();
		headerController.setAboutPageSelected();
	})

	$("#dailyui_link").click(() => {
		router.goToDailyUIPage();
		headerController.setDailyUISelected();
	})

	$("#case_1").click(() => {
		router.goToCase1Page();
	})

	$("#case_2").click(() => {
		router.goToCase2Page();
	})

	$("#case_3").click(() => {
		router.goToCase3Page();
	})

	$("#case_4").click(() => {
		router.goToCase4Page();
	})

	$("#case_5").click(() => {
		router.goToCase5Page();
	})

	$("#case_6").click(() => {
		router.goToCase6Page();
	})
});