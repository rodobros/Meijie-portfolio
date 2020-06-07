var caseSideNavManager = {};

caseSideNavManager.init = function(sectionsId) {
	caseSideNavManager.sectionsId = sectionsId;
	caseSideNavManager.lastScrollPos = $(window).scrollTop();
	caseSideNavManager.currentlyVisible = 0;

	// set up scroller
	$(window).scroll(function() {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
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
		}, 250));
		
		for (var i = 1 ; i < caseSideNavManager.sectionsId.length + 1 ; ++i) {
			if(caseSideNavManager.isVisible(i)) {
				// scrolling down
				if ($(window).scrollTop() > caseSideNavManager.lastScrollPos) {
					caseSideNavManager.currentlyVisible = i;
				} else {
					caseSideNavManager.currentlyVisible = i - 1;
				}
			}
		}
		caseSideNavManager.lastScrollPos = $(window).scrollTop();
		caseSideNavManager.makeSectionVisible(caseSideNavManager.currentlyVisible);
		
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
    	}, 100);
	})

	$([document.documentElement, document.body]).animate({
       	scrollTop: $(".header-container").offset().top
    }, 2);
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
	// TODO: there is a bug here, investigate
	if (!$("#section" + sectionNumber).length) {
		return false;
	}
	return ($(window).scrollTop() < $("#section" + sectionNumber).offset().top)
		&& (($(window).scrollTop() + $(window).height()) > $("#section" + sectionNumber).offset().top)
}