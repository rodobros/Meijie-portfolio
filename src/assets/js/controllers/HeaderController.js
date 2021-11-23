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
					"dailyui_header_link_ham",
					"case_header_link",
					"case_header_link_ham"];

headerController.activeCircleString = "<div class=\"active_circle\"></div>";

headerController.removeSelectedHeaderLink = function() {
	headerController.removeHam(true);
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
		//headerController.setPhotoPageSelected();
		//router.goToResumePage();
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
		//router.goToResumePage();
	})
	$("#" + headerController.headerLinksIds[9]).click(() => {
		headerController.setDailyUISelected();
		router.goToDailyUIPage();
	})

	$("#" + headerController.headerLinksIds[10]).click(() => {
		headerController.setWorkPageSelected();
		var goToProjectFunc = function() {
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#case_studies").offset().top - 30
			}, 0);
			headerController.removeHam(true);
		};
		if (headerController.isOnMainPage()) {
			goToProjectFunc();
		} else {
			router.goToMainPage(function() {
				goToProjectFunc();
			});
		}
	})
	$("#" + headerController.headerLinksIds[11]).click(() => {
		headerController.setWorkPageSelected();
		var goToProjectFunc = function() {
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#case_studies").offset().top - 30
			}, 0);
			headerController.removeHam(true);
		};
		if (headerController.isOnMainPage()) {
			goToProjectFunc();
		} else {
			router.goToMainPage(function() {
				goToProjectFunc();
			});
		}
	})

	$(".ham_container").click(() => {
		headerController.removeHam($(".ham_container").hasClass("ham_turned"));
	})
}

headerController.isOnMainPage = function() {
	var route = window.location.pathname.slice(1) || "/";
	return (route == "" || route == "/" || route == "main");
}

headerController.removeHam = function(shouldRemoveHam) {
	if (shouldRemoveHam) {
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

headerController.setCaseSelected = function() {
	headerController.removeSelectedHeaderLink();
	headerController.selectHeaderLink(headerController.headerLinksIds[10]);
}


$(document).ready(function() {
	$(".logo").click(() => {
		if(!headerController.isOnMainPage()) {
			headerController.setWorkPageSelected();
			router.goToMainPage();
		}
	})
	window.addEventListener('load', headerController.selectHeaderLinkFromEvent);
	window.addEventListener('hashchange', headerController.selectHeaderLinkFromEvent);
	window.addEventListener('popstate', headerController.selectHeaderLinkFromEvent);
})

headerController.selectHeaderLinkFromEvent = function(evt) {
	const route = window.location.pathname.slice(1) || "/";
	headerController.removeSelectedHeaderLink();
	switch(route) {
		case "about":
			headerController.selectHeaderLink(headerController.headerLinksIds[1]);
			break;
		case "photo":
			headerController.selectHeaderLink(headerController.headerLinksIds[2]);
			break;
		case "earth":
		case "lowes":
		case "rob0":
		case "onmoc":
		case "onmod":
		case "lamaisondesoya":
		case "bmo":
		case "trueskin":
		case "kiehls":
			headerController.selectHeaderLink(headerController.headerLinksIds[10]);
		break;
		default:
			break;
	}
}
