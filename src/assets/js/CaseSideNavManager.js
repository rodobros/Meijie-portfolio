var caseSideNavManager = {};

caseSideNavManager.init = function(sectionsId) {
	caseSideNavManager.sectionsId = sectionsId;
	caseSideNavManager.lastScrollPos = $(window).scrollTop();
	caseSideNavManager.currentlyVisible = 0;

	// set up scroller
	$(window).scroll(function() {
		var currentPos = $(window).scrollTop() + $(window).height();
		for (var i = caseSideNavManager.sectionsId.length - 1 ; i >= 0 ; --i) {
			if (!$("#" + caseSideNavManager.sectionsId[i]).length) {
				continue;
			}
			if (currentPos > $("#" + caseSideNavManager.sectionsId[i]).offset().top) {
				caseSideNavManager.makeSectionVisible(i + 1);
				return;
			}
		}
		caseSideNavManager.makeSectionVisible(1);
	});

	$(".huge_dot").hover((event) => {
		var idOfElement = $(event.target).attr('id');
		var postFixOfId = idOfElement[idOfElement.length - 1];
		$("#case_side_nav_dot" + postFixOfId).css("visibility", "visible");

	}, (event) => {
		var idOfElement = $(event.target).attr('id');
		var postFixOfId = idOfElement[idOfElement.length - 1];
		$("#case_side_nav_dot" + postFixOfId).css("visibility", "hidden");
	})

	$(".huge_dot").click((event) => {
		// slice the number
		var idOfElement = $(event.target).attr('id');
		$([document.documentElement, document.body]).animate({
        	scrollTop: $("#" + caseSideNavManager.sectionsId[idOfElement[idOfElement.length - 1] - 1]).offset().top - 50
    	}, 125);
	})

	// TODO: Put this back only if router is not happy about animate/fadeTo
	// $([document.documentElement, document.body]).animate({
    //    	scrollTop: $(".header-container").offset().top
    // }, 2);
}

caseSideNavManager.makeSectionVisible = function(sectionNumber) {
	for (var i = 0 ; i < caseSideNavManager.sectionsId.length + 1 ; ++i) {
		if (sectionNumber == i) {
			if (i == 0) {
				i++;
			}
			$("#huge_dot" + i).addClass("yellow_text");
		} else {
			$("#huge_dot" + i).removeClass("yellow_text");
		}
	}
}

caseSideNavManager.isVisible = function(sectionNumber) {
	if (!$("#section" + sectionNumber).length) {
		return false;
	}
	return ($(window).scrollTop() < $("#section" + sectionNumber).offset().top)
		&& (($(window).scrollTop() + $(window).height()) > $("#section" + sectionNumber).offset().top)
}