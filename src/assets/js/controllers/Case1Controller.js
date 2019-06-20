$(document).ready(function() {
	headerController.setCaseSelected()
	$("#test_prototype_button").click(() => {
		window.location.href = "https://invis.io/9WSBXMDMZVH";
	})
	$(".case1_img").click((event) => {
		if ($(event.target).width() > $(event.target).height()) {
			$("#img_in_overlay").css({
				width: '70%',
			});
			$("#img_in_overlay").css({
				height: 'auto',
			});
		} else {
			$("#img_in_overlay").css({
				width: 'auto'
			});
			$("#img_in_overlay").css({
				height: '70%',
			});
		}
		showImageInOverlay($(event.target).attr("src"));
	})
	$("#dismiss_button").click(() => {
		dismissOverlay();
	})

	$("overlay").click(() => {
		dismissOverlay();
	})

	$(document).keyup(function(e) {
	  if (e.key === "Escape") 
	  	dismissOverlay();
	});
})

var showImageInOverlay = function(imgSrc) {
	$("#img_in_overlay").attr("src", imgSrc);
	lockScrolling(true);
	$(".overlay").show();
}

var dismissOverlay = function() {
	lockScrolling(false);
	$(".overlay").hide();
}

var lockScrolling = function(shouldLock) {
	if (shouldLock) {
		$('html, body').css({
		    overflow: 'hidden',
		});
	} else {
		$('html, body').css({
		    overflow: 'auto',
		});
	}
}