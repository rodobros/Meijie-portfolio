var ImageOverlayManager = {}

ImageOverlayManager.setUpClickListeners = function() {
	$(".click_to_overlay").click((event) => {
		ImageOverlayManager.showImageInOverlay($(event.target).attr("src"));
	})

	$("#dismiss_button").click(() => {
		ImageOverlayManager.dismissOverlay();
	})

	$("overlay").click(() => {
		ImageOverlayManager.dismissOverlay();
	})

	$(document).keyup(function(e) {
	  if (e.key === "Escape") 
	  	ImageOverlayManager.dismissOverlay();
	});
}

ImageOverlayManager.showImageInOverlay = function(imgSrc) {
	$("#img_in_overlay").attr("src", imgSrc);
	ImageOverlayManager.lockScrolling(true);
	$(".overlay").show();
}

ImageOverlayManager.dismissOverlay = function() {
	ImageOverlayManager.lockScrolling(false);
	$(".overlay").hide();
}

ImageOverlayManager.lockScrolling = function(shouldLock) {
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
