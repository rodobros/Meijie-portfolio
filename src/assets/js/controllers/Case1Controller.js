$(document).ready(function() {
	headerController.setCaseSelected();
	ImageOverlayManager.setUpClickListeners();

	 lastScrollPos = $(window).scrollTop();

	// set up scroller
	$(window).scroll(function() {
		for (var i = 1 ; i < 6 ; ++i) {
			if(isVisible(i)) {
				// scrolling down
				if ($(window).scrollTop() > lastScrollPos) {
					currentlyVisible = i;
				} else {
					currentlyVisible = i - 1;
				}
			}
		}
		lastScrollPos = $(window).scrollTop();
		makeSectionVisible(currentlyVisible);
	});

	$("#huge_dot1").hover(() => {
			$("#case_side_nav_dot1").css("visibility", "visible");
		}, () => {
			$("#case_side_nav_dot1").css("visibility", "hidden");
		});

	$("#huge_dot2").hover(() => {
			$("#case_side_nav_dot2").css("visibility", "visible");
		}, () => {
			$("#case_side_nav_dot2").css("visibility", "hidden");
		});

	$("#huge_dot3").hover(() => {
			$("#case_side_nav_dot3").css("visibility", "visible");
		}, () => {
			$("#case_side_nav_dot3").css("visibility", "hidden");
		});

	$("#huge_dot4").hover(() => {
			$("#case_side_nav_dot4").css("visibility", "visible");
		}, () => {
			$("#case_side_nav_dot4").css("visibility", "hidden");
		});

	$("#huge_dot5").hover(() => {
			$("#case_side_nav_dot5").css("visibility", "visible");
		}, () => {
			$("#case_side_nav_dot5").css("visibility", "hidden");
		});

	$("#huge_dot").click((event) => {
		// slice the number
		$(event.target).attr("src")
	})
})

var makeSectionVisible = function(sectionNumber) {
	for (var i = 0 ; i < 6 ; ++i) {
		if (sectionNumber == i) {
			if (i == 0) {
				i++;
			}
			//$("#case_side_nav_dot" + i).css("visibility", "visible");
			$("#huge_dot" + i).addClass("yellow_text");
		} else {
			//$("#case_side_nav_dot" + i).css("visibility", "hidden");
			$("#huge_dot" + i).removeClass("yellow_text");
		}
	}
}

var isVisible = function(sectionNumber) {
	return ($(window).scrollTop() < $("#section" + sectionNumber).offset().top)
		&& (($(window).scrollTop() + $(window).height()) > $("#section" + sectionNumber).offset().top)
}

var lastScrollPos = 0;

var currentlyVisible = 0;

