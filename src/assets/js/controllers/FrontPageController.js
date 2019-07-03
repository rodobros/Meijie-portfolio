$(document).ready(function() {
	//router.init();
	router.goToMainPage();
	headerController.setOnclickListeners();
	//setupPass();
});

var setupPass = function() {
	$('main').hide();
	$('header').hide();
	$('footer').hide();
	$('.dont-delete-me').show();

	$("#unlock_button").click(function() {
	  	if($("#password").val() == "maggieli") {
			$('main').show();
			$('header').show();
			$('footer').show();
			$('.dont-delete-me').hide();
		}
	})
}

