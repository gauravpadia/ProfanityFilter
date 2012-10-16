( function( $ ) {
	
	$.fn.profanityFilter = function(){
	
		/*
		 * Read the JSON file
		*/
		function readJSONControllerFile(file){
			var request = new XMLHttpRequest();
			request.open("GET",file,false);
			request.setRequestHeader('X-Requested-with', 'XMLHttpRequest');
			request.send(null);
			try{
				return JSON.parse(request.responseText);
			}catch(e){
				return '';
			}
		}
		
	return this.each(function(){
		var filter = readJSONControllerFile("json/ProfanWords.json");
		
	});
	
	} /*profanityFilter over here*/
	
} )(jQuery);
/*C:\Users\sadikr\AppData\Local\Google\Chrome\Application\chrome.exe  --allow-file-access-from-files*/