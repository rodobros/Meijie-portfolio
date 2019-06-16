var headerController = {};

headerController.headerLinksIds = [ "work_header_link",
					"about_header_link",
					"photo_header_link",
					"resume_header_link",
					"dailyui_header_link"];

headerController.activeCircleString = "<div class=\"active_circle\"></div>";

headerController.removeSelectedHeaderLink = function() {
	$(".active_circle").remove();
	$(".active").removeClass("active");
}

headerController.selectHeaderLink = function(selectedHeader) {
	$("#" + selectedHeader).append(headerController.activeCircleString);
	$("#" + selectedHeader).addClass("active");
}

headerController.setOnclickListeners = function() {
	$("#" + headerController.headerLinksIds[0]).click(() => {
		headerController.setWorkPageSelected();
		router.goToMainPage();
	})
	$("#" + headerController.headerLinksIds[1]).click(() => {
		headerController.setAboutPageSelected();
		router.goToAboutPage();
	})
	$("#" + headerController.headerLinksIds[2]).click(() => {
		headerController.setResumePageSelected();
		router.goToPhotoPage();
	})
	$("#" + headerController.headerLinksIds[3]).click(() => {
		headerController.setPhotoPageSelected();
		router.goToResumePage();
	})
	$("#" + headerController.headerLinksIds[4]).click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})
}

headerController.makeHeaderTransparent = function(shouldMakeTransparent) {
	if (shouldMakeTransparent) {
		$(".header-container").removeClass("header-shadow");
	} else {
		$(".header-container").addClass("header-shadow");
	}
	
}

headerController.setWorkPageSelected = function() {
	headerController.removeSelectedHeaderLink();
	headerController.selectHeaderLink(headerController.headerLinksIds[0]);
}

headerController.setAboutPageSelected = function() {
	headerController.removeSelectedHeaderLink();
	headerController.selectHeaderLink(headerController.headerLinksIds[1]);
}

headerController.setResumePageSelected = function() {
	headerController.removeSelectedHeaderLink();
	headerController.selectHeaderLink(headerController.headerLinksIds[2]);
}

headerController.setPhotoPageSelected = function() {
	headerController.removeSelectedHeaderLink();
	headerController.selectHeaderLink(headerController.headerLinksIds[3]);
}

headerController.setDailyUISelected = function() {
	headerController.removeSelectedHeaderLink();
	headerController.selectHeaderLink(headerController.headerLinksIds[4]);
}


$(document).ready(function() {
	$(".logo").click(() => {
		headerController.setWorkPageSelected();
		router.goToMainPage();
	})
})
