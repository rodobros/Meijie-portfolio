var common = {}

// function to get an url parameter
common.urlParam = function(name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if(results)
	 return results[1];
  return 0;
}