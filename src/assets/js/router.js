var router = {};

router.init = function() {
	if (router.shouldUseRoutes) {
		window.addEventListener('hashchange', router.routeHandler);
		window.addEventListener('popstate', router.routeHandler);
	}
}

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
			router.loadEarthPage();
			break;
		case "lamaisondesoya":
			router.loadSoyaPage();
			break;
		case "bmo":
			router.loadBmoPage();
			break;
		case "trueskin":
			router.loadTrueSkinPage();
			break;
		case "kiehls":
			router.loadKiehlsPage();
			break;
		case "dailyui":
			router.loadDailyUIPage();
			break;
		case "lowes":
			router.loadLowesPage();
			break;
		case "rob0":
			router.loadRob0Page();
			break;
		case "onmoc":
			router.loadOnMoCasePage();
			break;
		case "onmod":
			router.loadOnMoDesignPage();
			break;
		default:
			router.load404Page();
	}
}

router.addHistory = function(route) {
	if (router.shouldUseRoutes) {
		window.history.pushState({"pageTitle":"ignored"},"", route);
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
	$("main").hide().load("./main_page.html", cb).fadeTo(200, 1);
}

router.goToAboutPage = function() {
	router.addHistory("about");
	router.loadAboutPage();
}

router.loadAboutPage = function() {
	router.coolLoad("./about.html");
}

router.goToPhotoPage = function() {
	router.addHistory("photo");
	router.loadPhotoPage();
}

router.loadPhotoPage = function() {
	router.coolLoad("./photo.html");
}

router.goToResumePage = function() {
	router.coolLoad("./resume.html");
}

router.goToDailyUIPage = function () {
	router.addHistory("dailyui");
	router.loadDailyUIPage();
}

router.loadDailyUIPage = function () {
	router.coolLoad("./dailyui.html");
}

router.load404Page = function() {
	router.coolLoad("./404.html");
}

router.goToEarthPage = function() {
	router.addHistory("earth");
	router.loadEarthPage();
}

router.loadEarthPage = function() {
	router.coolLoad("./Earth.html");
}

router.goToSoyaPage = function() {
	router.addHistory("lamaisondesoya");
	router.loadSoyaPage();
}

router.loadSoyaPage = function() {
	router.coolLoad("./Soya.html");
}

router.goToBmoPage = function() {
	router.addHistory("bmo");
	router.loadBmoPage();
}

router.loadBmoPage = function() {
	router.coolLoad("./Bmo.html");
}

router.goToTrueSkinPage = function() {
	router.addHistory("trueskin");
	router.loadTrueSkinPage();
}

router.loadTrueSkinPage = function() {
	router.coolLoad("./TrueSkin.html");
}

router.goToKiehlsPage = function() {
	router.addHistory("kiehls");
	router.loadKiehlsPage();
}

router.loadKiehlsPage = function() {
	router.coolLoad("./Kiehls.html");
}

router.goToLowesPage = function() {
	router.addHistory("lowes");
	router.loadLowesPage();
}

router.loadLowesPage = function() {
	router.coolLoad("./Lowes.html");
}

router.goToRob0Page = function() {
	router.addHistory("rob0");
	router.loadRob0Page();
}

router.loadRob0Page = function() {
	router.coolLoad("./Rob0.html");
}

router.goToOnMoCasePage = function() {
	router.addHistory("onmoc");
	router.loadOnMoCasePage();
}

router.loadOnMoCasePage = function() {
	router.coolLoad("./OnMoCase.html");
}

router.goToOnMoDesignPage = function() {
	router.addHistory("onmod");
	router.loadOnMoDesignPage();
}

router.loadOnMoDesignPage = function() {
	router.coolLoad("./OnMoDesign.html");
}

router.coolLoad = function(htmlFile) {	
	$("main").hide().load(htmlFile, function() {
		window.scroll(0,0);
		$("main").fadeTo(200, 1);
	});
}
