var router = {};

router.init = function() {
	window.addEventListener('load', router.routeHandler);
	window.addEventListener('hashchange', router.routeHandler);
}

router.resolveRoute = function(url) {
	switch(url) {
		case "":
		case "/":
		case "work":
			router.goToMainPage();
			break;
		case "about":
			router.goToAboutPage();
			break;
		case "resume":
			router.goToResumePage();
			break;
		case "photo":
			router.goToPhotoPage();
			break;
		default:
			window.location.replace("./404.html");

	}
}

router.routeHandler = (evt) => {
    const route = window.location.pathname.slice(1) || "/";
    router.resolveRoute(route.toLowerCase());
};

router.goToMainPage = function(cb) {
	$("main").load("./main_page.html", cb);
}

router.goToAboutPage = function() {
	$("main").load("./about.html");
}

router.goToPhotoPage = function() {
	$("main").load("./photo.html");
}

router.goToResumePage = function() {
	$("main").load("./resume.html");
}

router.goToDailyUIPage = function () {
	$("main").load("./dailyui.html");
}

router.goToCase1Page = function() {
	$("main").load("./case1.html");
}

router.goToCase2Page = function() {
	$("main").load("./case2.html");
}

router.goToCase3Page = function() {
	$("main").load("./case3.html");
}