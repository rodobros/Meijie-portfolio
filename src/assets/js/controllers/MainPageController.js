$(document).ready(function() {
	$("#about_me_button").click(() => {
		router.goToAboutPage();
		headerController.setAboutPageSelected();
	})

	$("#dailyui_link").click(() => {
		router.goToDailyUIPage();
	})
});