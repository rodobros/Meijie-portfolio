var DailyUIController = {};

DailyUIController.numberOfImages = 71;

DailyUIController.gifImages = [14, 25, 44, 63, 71];
DailyUIController.doubleImage = [41]

$(document).ready(() => {
	var finalHtml = "";
	if ($(".daily_ui_container img").length == 0) {
		for(var i = DailyUIController.numberOfImages ; i > 0 ; --i) {
			if (DailyUIController.gifImages.includes(i)) {
				finalHtml += "<img class=\"click_to_overlay\" src=\"./assets/img/daily_ui/Day " + i + ".gif\">";	
			} else {
				finalHtml += "<img class=\"click_to_overlay\" src=\"./assets/img/daily_ui/Day " + i + ".png\">";
				if (DailyUIController.doubleImage.includes(i)) {
					finalHtml += "<img class=\"click_to_overlay\" src=\"./assets/img/daily_ui/Day " + i + "_2.png\">";
				}
			}
		}
		$(".daily_ui_container").append(finalHtml);
	}
	ImageOverlayManager.makeImageNotScrollable = true;
	ImageOverlayManager.setUpClickListeners();
})