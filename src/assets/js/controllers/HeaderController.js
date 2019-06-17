var headerController = {};

headerController.headerLinksIds = [ "work_header_link",
					"about_header_link",
					"photo_header_link",
					"resume_header_link",
					"dailyui_header_link",
					"work_header_link_ham",
					"about_header_link_ham",
					"photo_header_link_ham",
					"resume_header_link_ham",
					"dailyui_header_link_ham"];

headerController.activeCircleString = "<div class=\"active_circle\"></div>";

headerController.removeSelectedHeaderLink = function() {
	$(".active_circle").remove();
	$(".active").removeClass("active");
	$(".ham_selected").removeClass("ham_selected");
}

headerController.selectHeaderLink = function(selectedHeader) {
	$("#" + selectedHeader).append(headerController.activeCircleString);
	$("#" + selectedHeader).addClass("active");
	$("#" + selectedHeader + "_ham").addClass("ham_selected");
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

	$("#" + headerController.headerLinksIds[5]).click(() => {
		headerController.setWorkPageSelected();
		router.goToMainPage();
	})
	$("#" + headerController.headerLinksIds[6]).click(() => {
		headerController.setAboutPageSelected();
		router.goToAboutPage();
	})
	$("#" + headerController.headerLinksIds[7]).click(() => {
		headerController.setResumePageSelected();
		router.goToPhotoPage();
	})
	$("#" + headerController.headerLinksIds[8]).click(() => {
		headerController.setPhotoPageSelected();
		router.goToResumePage();
	})
	$("#" + headerController.headerLinksIds[9]).click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})

	$(".ham_container").click(() => {
		if ($(".ham_container").hasClass("ham_turned")) {
			$(".ham_container").removeClass("ham_turned");
			$(".ham_menu_container").addClass("no-display");
			$("header").removeClass("whitish");
			$(".ham_menu_container").removeClass("whitish");
		} else {
			$(".ham_container").addClass("ham_turned");
			$(".ham_menu_container").removeClass("no-display");
			$("header").addClass("whitish");
			$(".ham_menu_container").addClass("whitish");
		}
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
