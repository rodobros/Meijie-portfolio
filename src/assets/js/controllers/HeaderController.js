var headerController = {};

headerController.headerLinksIds = [ "work_header_link",
					"about_header_link",
					"photo_header_link",
					"resume_header_link"];

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
		headerController.removeSelectedHeaderLink();
		headerController.selectHeaderLink(headerController.headerLinksIds[0]);
		router.goToMainPage();
	})
	$("#" + headerController.headerLinksIds[1]).click(() => {
		headerController.removeSelectedHeaderLink();
		headerController.selectHeaderLink(headerController.headerLinksIds[1]);
		router.goToAboutPage();
	})
	$("#" + headerController.headerLinksIds[2]).click(() => {
		headerController.removeSelectedHeaderLink();
		headerController.selectHeaderLink(headerController.headerLinksIds[2]);
		router.goToPhotoPage();
	})
	$("#" + headerController.headerLinksIds[3]).click(() => {
		headerController.removeSelectedHeaderLink();
		headerController.selectHeaderLink(headerController.headerLinksIds[3]);
		router.goToResumePage();
	})
}