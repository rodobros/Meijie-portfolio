$(document).ready(function() {
	$("#about_me_button").click(() => {
		router.goToAboutPage();
		headerController.setAboutPageSelected();
	})

	$("#dailyui_link").click(() => {
		router.goToDailyUIPage();
		headerController.setDailyUISelected();
	})

	$("#earth").click(() => {
		router.goToEarthPage();
	})

	$("#soya").click(() => {
		router.goToSoyaPage();
	})

	$("#bmo").click(() => {
		router.goToBmoPage();
	})

	$("#trueskin").click(() => {
		router.goToTrueSkinPage();
	})

	$("#kiehls").click(() => {
		router.goToKiehlsPage();
	})

	$("#lowes").click(() => {
		router.goToLowesPage();
	})

	$("#rob0").click(() => {
		router.goToRob0Page();
	})

	$("#onmo_case").click(() => {
		router.goToOnMoCasePage();
	})

	$("#onmo_design").click(() => {
		router.goToOnMoDesignPage();
	})

	$("#tdi").click(() => {
		router.goToTDPage();
	})

	$("#mortgage").click(() => {
		router.goToMortgageCadencePage();
	})
});