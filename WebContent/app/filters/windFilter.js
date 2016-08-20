/**
 *  tempFilter.js contains the temp filter. This filter is used to 
 *  set the precision for temp fields.
 */
mediaCenterApp.filter('wind',['$filter', 
  function($filter) {
    return function(input) {
        if(input <= 12){
        	return "Gentle Breeze";
        }else if(input <= 24){
        	return "Breezy";
        }else if(input <= 31){
        	return "Strong Breeze";
        }else if(input <= 38){
        	return "Strong: " + input + " mph";
        }else if(input <= 46){
        	return "Gale Force: " + input + " mph";
        }else if(input <= 63){
        	return "Severe Gale: " + input + " mph";
        }else if(input <= 72){
        	return "Violent Storm: " + input + " mph";
        }else if(input > 72){
        	return "Hurricane Force: " + input + " mph";
        }
    };
  }
]);