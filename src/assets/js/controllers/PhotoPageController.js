var PhotoPageController = {};

PhotoPageController.numberOfImages = 19;

$(document).ready(() => {
	var finalHtml = "";
	var intermediateHtml = "";
	let imagesPerColum = Math.ceil(PhotoPageController.numberOfImages / 2);
	for(var i = 1 ; i < PhotoPageController.numberOfImages + 1 ; ++i) {
		intermediateHtml += "<img src=\"./assets/img/photo_page/" + i + ".jpg\">";
		if (i % imagesPerColum == 0 || i == PhotoPageController.numberOfImages){
			finalHtml += "<div class=\"photo_column\">" + intermediateHtml + "</div>";
			intermediateHtml = "";
		}
	}
	$(".photo_page_container").append(finalHtml);
	ImageOverlayManager.setUpClickListeners();
})