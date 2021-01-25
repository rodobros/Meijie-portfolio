var ImageOverlayManager = {}

ImageOverlayManager.setUpClickListeners = function() {
	$(".click_to_overlay").click((event) => {
		ImageOverlayManager.showImageInOverlay($(event.target).attr("src"));
	})

	$(".overlay").click(() => {
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
	if (ImageOverlayManager.makeImageNotScrollable) {
		if($("#img_in_overlay").height() <= $("#img_in_overlay").width()) {
			$("#img_in_overlay").removeClass("img_in_overlay_w");
			$("#img_in_overlay").addClass("img_in_overlay_h");
		} else {
			$("#img_in_overlay").addClass("img_in_overlay_w");
			$("#img_in_overlay").removeClass("img_in_overlay_h");
		}
	} else {
		$("#img_in_overlay").addClass("img_in_overlay_w");
		$("#img_in_overlay").removeClass("img_in_overlay_h");
	}
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

ImageOverlayManager.makeImageNotScrollable = false;
