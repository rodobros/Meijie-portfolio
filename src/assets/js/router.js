var router = {};

router.init = function() {
	if (router.shouldUseRoutes) {
		window.addEventListener('hashchange', router.routeHandler);
		window.addEventListener('popstate', router.routeHandler);
	}
}

router.shouldUseRoutes = true;

router.history = {};
router.history.main = "main";
router.history.about = "about";
router.history.photo = "photo";
router.history.earth = "earth";
router.history.lamaisondesoya = "lamaisondesoya";
router.history.bmo = "bmo";
router.history.trueskin = "trueskin";
router.history.dailyui = "dailyui";
router.history.lowes = "lowes";
router.history.rob0 = "rob0";
router.history.onmoc = "onmoc";
router.history.onmod = "onmod";
router.history.mortgage = "mortgage";
router.history.td = "td";

router.resolveRoute = function(url) {
	var urlToLow = url.toLowerCase();
	switch(urlToLow) {
		case "":
		case "/":
		case router.history.main:
			router.loadMainPage();
			break;
		case router.history.about:
			router.loadAboutPage();
			break;
		case router.history.photo:
			router.loadPhotoPage();
			break;
		case router.history.earth:
			router.loadEarthPage();
			break;
		case router.history.lamaisondesoya:
			router.loadSoyaPage();
			break;
		case router.history.bmo:
			router.loadBmoPage();
			break;
		case router.history.trueskin:
			router.loadTrueSkinPage();
			break;
		case router.history.dailyui:
			router.loadDailyUIPage();
			break;
		case router.history.lowes:
			router.loadLowesPage();
			break;
		case router.history.rob0:
			router.loadRob0Page();
			break;
		case router.history.onmoc:
			router.loadOnMoCasePage();
			break;
		case router.history.onmod:
			router.loadOnMoDesignPage();
			break;
		case router.history.mortgage:
			router.loadMortgageCadencePage();
			break;
		case router.history.td:
			router.loadTDPage();
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
	$("main").hide().load("./Home.html", cb).fadeTo(200, 1);
}

router.goToAboutPage = function() {
	router.addHistory(router.history.about);
	router.loadAboutPage();
}

router.loadAboutPage = function() {
	router.coolLoad("./About.html");
}

router.goToPhotoPage = function() {
	router.addHistory(router.history.photo);
	router.loadPhotoPage();
}

router.loadPhotoPage = function() {
	router.coolLoad("./Photo.html");
}

router.goToDailyUIPage = function () {
	router.addHistory(router.history.dailyui);
	router.loadDailyUIPage();
}

router.loadDailyUIPage = function () {
	router.coolLoad("./DailyUi.html");
}

router.load404Page = function() {
	router.coolLoad("./404.html");
}

router.goToEarthPage = function() {
	router.addHistory(router.history.earth);
	router.loadEarthPage();
}

router.loadEarthPage = function() {
	router.coolLoad("./Earth.html");
}

router.goToSoyaPage = function() {
	router.addHistory(router.history.lamaisondesoya);
	router.loadSoyaPage();
}

router.loadSoyaPage = function() {
	router.coolLoad("./Soya.html");
}

router.goToBmoPage = function() {
	router.addHistory(router.history.bmo);
	router.loadBmoPage();
}

router.loadBmoPage = function() {
	router.coolLoad("./Bmo.html");
}

router.goToTrueSkinPage = function() {
	router.addHistory(router.history.trueskin);
	router.loadTrueSkinPage();
}

router.loadTrueSkinPage = function() {
	router.coolLoad("./TrueSkin.html");
}

router.goToLowesPage = function() {
	router.addHistory(router.history.lowes);
	router.loadLowesPage();
}

router.loadLowesPage = function() {
	router.coolLoad("./Lowes.html");
}

router.goToRob0Page = function() {
	router.addHistory(router.history.rob0);
	router.loadRob0Page();
}

router.loadRob0Page = function() {
	router.coolLoad("./Rob0.html");
}

router.goToOnMoCasePage = function() {
	router.addHistory(router.history.onmoc);
	router.loadOnMoCasePage();
}

router.loadOnMoCasePage = function() {
	router.coolLoad("./OnMoCase.html");
}

router.goToOnMoDesignPage = function() {
	router.addHistory(router.history.onmod);
	router.loadOnMoDesignPage();
}

router.loadOnMoDesignPage = function() {
	router.coolLoad("./OnMoDesign.html");
}

router.goToMortgageCadencePage = function() {
	router.addHistory(router.history.mortgage);
	router.loadMortgageCadencePage();
}

router.loadMortgageCadencePage = function() {
	router.coolLoad("./MortgageCadence.html");
}

router.goToTDPage = function() {
	router.addHistory(router.history.td);
	router.loadTDPage();
}

router.loadTDPage = function() {
	router.coolLoad("./TD.html");
}

router.coolLoad = function(htmlFile) {	
	$("main").hide().load(htmlFile, function() {
		window.scroll(0,0);
		$("main").fadeTo(200, 1);
	});
}
