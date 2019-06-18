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
});