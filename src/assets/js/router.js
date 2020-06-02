var router = {};

router.init = function() {
	if (router.shouldUseRoutes) {
		window.addEventListener('load', router.routeHandler);
		window.addEventListener('hashchange', router.routeHandler);
		window.addEventListener('popstate', router.routeHandler);
		$.get( "./index.html", function(data) {
			router.index = data;
		});
	}
}

router.index = ""

router.shouldUseRoutes = true;

router.resolveRoute = function(url) {
	var urlToLow = url.toLowerCase();
	switch(urlToLow) {
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
		case "mirror":
			router.goToCase1Page();
		break;
		case "lamaisondesoya":
			router.goToCase2Page();
		break;
		case "bmo":
			router.goToCase3Page();
		break;
		case "trueskin":
			router.goToCase4Page();
		break;
		case "dailyui":
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
	console.log("evt: " + evt);
    const route = window.location.pathname.slice(1) || "/";
    console.log("route: " + route);
    router.resolveRoute(route.toLowerCase());
};

router.goToMainPage = function(cb) {
	router.addHistory("/");
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
	router.addHistory("dailyui");
	$("main").load("./dailyui.html");
}

router.goToCase1Page = function() {
	router.addHistory("mirror");
	$("main").load("./case1.html");
}

router.goToCase2Page = function() {
	router.addHistory("lamaisondesoya");
	$("main").load("./case2.html");
}

router.goToCase3Page = function() {
	router.addHistory("bmo");
	$("main").load("./case3.html");
}

router.goToCase4Page = function() {
	router.addHistory("trueskin");
	$("main").load("./case4.html");
}