var PhotoPageController = {};

PhotoPageController.numberOfPeopleImages = 20;
PhotoPageController.numberOfLandscapeImages = 25;
PhotoPageController.numberOfFoodImages = 25;
PhotoPageController.numberOfColumn = 5;

$(document).ready(() => {
	var finalHtml = "";
	var intermediateHtml = "";
	let imagesPerColum = Math.ceil(PhotoPageController.numberOfPeopleImages / PhotoPageController.numberOfColumn);
	if ($(".photo_page_container_people div").length == 0) {
		for(var i = 1 ; i < PhotoPageController.numberOfPeopleImages + 1 ; ++i) {
			intermediateHtml += "<img class=\"click_to_overlay\" src=\"./assets/img/photo_page/People/" + i + ".jpg\">";
			if (i % imagesPerColum == 0 || i == PhotoPageController.numberOfPeopleImages){
				finalHtml += "<div class=\"photo_column" 
					+ ((i / imagesPerColum == 1) ? " photo_left_column": "")
					+ ((i == PhotoPageController.numberOfPeopleImages) ? " photo_right_column": "")
					+  "\">" + intermediateHtml + "</div>";
				intermediateHtml = "";
			}
		}
		$(".photo_page_container_people").append(finalHtml);
	}

	finalHtml = "";
	intermediateHtml = "";
	imagesPerColum = Math.ceil(PhotoPageController.numberOfLandscapeImages / PhotoPageController.numberOfColumn);
	if ($(".photo_page_container_landscape div").length == 0) {
		for(var i = 1 ; i < PhotoPageController.numberOfLandscapeImages + 1 ; ++i) {
			intermediateHtml += "<img class=\"click_to_overlay\" src=\"./assets/img/photo_page/Landscape/" + i + ".jpg\">";
			if (i % imagesPerColum == 0 || i == PhotoPageController.numberOfLandscapeImages){
				finalHtml += "<div class=\"photo_column" 
				+ ((i / imagesPerColum == 1) ? " photo_left_column": "")
				+ ((i == PhotoPageController.numberOfLandscapeImages) ? " photo_right_column": "")
				+ "\">" + intermediateHtml + "</div>";
				intermediateHtml = "";
			}
		}
		$(".photo_page_container_landscape").append(finalHtml);
	}

	finalHtml = "";
	intermediateHtml = "";
	imagesPerColum = Math.ceil(PhotoPageController.numberOfFoodImages / PhotoPageController.numberOfColumn);
	if ($(".photo_page_container_food div").length == 0) {
		for(var i = 1 ; i < PhotoPageController.numberOfFoodImages + 1 ; ++i) {
			intermediateHtml += "<img class=\"click_to_overlay\" src=\"./assets/img/photo_page/Food/" + i + ".jpg\">";
			if (i % imagesPerColum == 0 || i == PhotoPageController.numberOfFoodImages){
				finalHtml += "<div class=\"photo_column" 
				+ ((i / imagesPerColum == 1) ? " photo_left_column": "")
				+ ((i == PhotoPageController.numberOfFoodImages) ? " photo_right_column": "")
				+ "\">" + intermediateHtml + "</div>";
				intermediateHtml = "";
			}
		}
		$(".photo_page_container_food").append(finalHtml);
	}

	ImageOverlayManager.makeImageNotScrollable = true;
	ImageOverlayManager.setUpClickListeners();
})