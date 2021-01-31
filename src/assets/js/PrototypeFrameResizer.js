var PrototypeFrameResizer = {};

PrototypeFrameResizer.iframeOriginalWidth = 0;
PrototypeFrameResizer.iframeOriginalHeight = 0;
PrototypeFrameResizer.bigScreenSideOffset = 0;
PrototypeFrameResizer.sideMarginsPercentage = 0;
PrototypeFrameResizer.responsivePixelTreshold = 0;
PrototypeFrameResizer.responsivePixelTresholdMax = 0;
PrototypeFrameResizer.iframeJquerySelector = "";

PrototypeFrameResizer.init = function(prototypeType, jquerySelector) {
    PrototypeFrameResizer.iframeJquerySelector = jquerySelector
    // Welcome to magical values valley!
    switch(prototypeType) {
        case "invision":
            PrototypeFrameResizer.iframeOriginalWidth = 442;
            PrototypeFrameResizer.iframeOriginalHeight = 935;
            PrototypeFrameResizer.bigScreenSideOffset = 300;
            PrototypeFrameResizer.sideMarginsPercentage = 0.13;
            PrototypeFrameResizer.responsivePixelTreshold = 900;
            PrototypeFrameResizer.responsivePixelTresholdMax = 1400;
        break;
        default:
            console.log("invalid prototype type!");
    }
}

PrototypeFrameResizer.resize = function() {
    if (!PrototypeFrameResizer.isInit()) {
        console.log("iframe resizer was not initialized!");
    }
    var containerSize = (($( window ).width()*(1 - 2 * PrototypeFrameResizer.sideMarginsPercentage)));
	if ($(window).width() > PrototypeFrameResizer.responsivePixelTreshold) {
		containerSize = containerSize - PrototypeFrameResizer.bigScreenSideOffset;
	}
	if ($(window).width() >= PrototypeFrameResizer.responsivePixelTresholdMax) {
		containerSize = ((PrototypeFrameResizer.responsivePixelTresholdMax*(1 - 2 * PrototypeFrameResizer.sideMarginsPercentage))) - PrototypeFrameResizer.bigScreenSideOffset;
	}
	containerSize = containerSize / 2; // divide by 2 because we have the <ul> next to the iframe which takes half the space
	var transformRatio = (containerSize / PrototypeFrameResizer.iframeOriginalWidth);
	$(PrototypeFrameResizer.iframeJquerySelector).css('transform', 'scale(' + transformRatio + ')');
	$(".case_ul_1").css('height', Math.floor(PrototypeFrameResizer.iframeOriginalHeight * transformRatio) + 'px');
	$(".case_ul_2").css('height', Math.floor(PrototypeFrameResizer.iframeOriginalHeight * transformRatio) + 'px');
}

PrototypeFrameResizer.isInit = function() {
    return PrototypeFrameResizer.iframeOriginalWidth == 0 ||
    PrototypeFrameResizer.iframeOriginalHeight == 0 ||
    PrototypeFrameResizer.bigScreenSideOffset == 0 ||
    PrototypeFrameResizer.sideMarginsPercentage == 0 ||
    PrototypeFrameResizer.responsivePixelTreshold == 0 ||
    PrototypeFrameResizer.responsivePixelTresholdMax == 0;
}