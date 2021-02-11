var router = {};

router.init = function() {
	if (router.shouldUseRoutes) {
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
			router.loadMainPage();
			break;
		case "about":
			router.loadAboutPage();
			break;
		case "photo":
			router.loadPhotoPage();
			break;
		case "earth":
			router.loadCase1Page();
			break;
		case "lamaisondesoya":
			router.loadCase2Page();
			break;
		case "bmo":
			router.loadCase3Page();
			break;
		case "trueskin":
			router.loadCase4Page();
			break;
		case "kiehls":
			router.loadCase5Page();
			break;
		case "dailyui":
			router.loadDailyUIPage();
			break;
		case "lowes":
			router.loadCase6Page();
			break;
		case "rob0":
			router.loadCase8Page();
			break;
		default:
			router.load404Page();
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
	router.addHistory("/");
	router.loadMainPage(cb);
}

router.loadMainPage = function(cb) {
	$("main").load("./main_page.html", cb);
}

router.goToAboutPage = function() {
	router.addHistory("about");
	router.loadAboutPage();
}

router.loadAboutPage = function() {
  	$("main").load("./about.html");
}

router.goToPhotoPage = function() {
	router.addHistory("photo");
	router.loadPhotoPage();
}

router.loadPhotoPage = function() {
	$("main").load("./photo.html");
}

router.goToResumePage = function() {
	$("main").load("./resume.html");
}

router.goToDailyUIPage = function () {
	router.addHistory("dailyui");
	router.loadDailyUIPage();
}

router.loadDailyUIPage = function () {
	$("main").load("./dailyui.html");
}

router.load404Page = function() {
	$("main").load("./404.html");
}

router.goToCase1Page = function() {
	router.addHistory("earth");
	router.loadCase1Page();
}

router.loadCase1Page = function() {
	$("main").load("./case1.html");
}

router.goToCase2Page = function() {
	router.addHistory("lamaisondesoya");
	router.loadCase2Page();
}

router.loadCase2Page = function() {
	$("main").load("./case2.html");
}

router.goToCase3Page = function() {
	router.addHistory("bmo");
	router.loadCase3Page();
}

router.loadCase3Page = function() {
	$("main").load("./case3.html");
}

router.goToCase4Page = function() {
	router.addHistory("trueskin");
	router.loadCase4Page();
}

router.loadCase4Page = function() {
	$("main").load("./case4.html");
}

router.goToCase5Page = function() {
	router.addHistory("kiehls");
	router.loadCase5Page();
}

router.loadCase5Page = function() {
	$("main").load("./case5.html");
}

router.goToCase6Page = function() {
	router.addHistory("lowes");
	router.loadCase6Page();
}

router.loadCase6Page = function() {
	$("main").load("./case6.html");
}

router.goToCase8Page = function() {
	router.addHistory("rob0");
	router.loadCase8Page();
}

router.loadCase8Page = function() {
	$("main").load("./case8.html");
}
