/**
 *  variantsFilter.js contains the variants filter. This filter is used to 
 *  filter out all undefined variants as well as insignificant rainfall and snow fall.
 */
mediaCenterApp.filter('variants',['$filter',
	function($filter) {
		return function(input) {
			if (!input) return input;
		
			var result = {};
			var precipitationFilter = $filter('precipitation');
			var windFilter = $filter('wind');
			
		    angular.forEach(input, function(value, key) {
		      //filter values first
		      if (filterValues(value, key)){
		    	  //if key is rain or snow use filter on value before store in result.
		    	  if(key === "rain" || key === "snow"){
		    		  value = precipitationFilter(value, 3);
		    		  result[key] = value;
		    	  }else if(key === "wind"){
		    		  value = windFilter(value);
		    		  result[key] = value;
		    	  }
		    	  
		    	  else{
		    		  result[key] = value; 
		    	  }
		      }
		    
		  });

		  return result;
		}

		  /// Used to filter out all undefined variants as well as insignificant rainfall and snow fall. 
		  function filterValues(value, key){
			  if(!value){
				  return false;
			  }else if(key === "clouds"){
				  return false;
			  }else if(key === "wind" && value < 10){
				  return false;
			  }else if(key === "rain" && value < 0.8){
				  return false;
			  }else if(key === "snow" && value < 0.2){
				  return false;
			  }
			  return true;
		  }
	}
]);