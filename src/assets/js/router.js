var router = {};

router.init = function() {
	if (router.shouldUseRoutes) {
		window.addEventListener('load', router.routeHandler);
		window.addEventListener('hashchange', router.routeHandler);
		$.get( "./index.html", function(data) {
			router.index = data;
		});
	}
}

router.index = ""

router.shouldUseRoutes = true;

router.resolveRoute = function(url) {
	switch(url) {
		case "":
		case "/":
		case "main":
			router.goToMainPage();
			break;
		case "about":
			router.goToAboutPage();
			break;
		case "photo":
			router.goToPhotoPage();
			break;
		case "case1":
			router.goToCase1Page();
		break;
		case "case2":
			router.goToCase2Page();
		break;
		case "case3":
			router.goToCase3Page();
		break;
		case "case4":
			router.goToCase4Page();
		break;
		case "daily":
			router.goToDailyUIPage();
		break;
		default:
			window.location.replace("./404.html");

	}
}

router.addHistory = function(route) {
	if (router.shouldUseRoutes) {
		window.history.pushState({"html": router.index, "pageTitle":"ignored"},"", route);
	}
}

router.routeHandler = (evt) => {
    const route = window.location.pathname.slice(1) || "/";
    router.resolveRoute(route.toLowerCase());
};

router.goToMainPage = function(cb) {
	router.addHistory("main");
	$("main").load("./main_page.html", cb);
}

router.goToAboutPage = function() {
	router.addHistory("about");
  	$("main").load("./about.html");
}

router.goToPhotoPage = function() {
	router.addHistory("photo");
	$("main").load("./photo.html");
}

router.goToResumePage = function() {
	$("main").load("./resume.html");
}

router.goToDailyUIPage = function () {
	router.addHistory("daily");
	$("main").load("./dailyui.html");
}

router.goToCase1Page = function() {
	router.addHistory("case1");
	$("main").load("./case1.html");
}

router.goToCase2Page = function() {
	router.addHistory("case2");
	$("main").load("./case2.html");
}

router.goToCase3Page = function() {
	router.addHistory("case3");
	$("main").load("./case3.html");
}

router.goToCase4Page = function() {
	router.addHistory("case4");
	$("main").load("./case4.html");
}