/** 
 *  tempFilter.js contains the temp filter. This filter is used to 
 *  set the precision for temp fields.
 */
mediaCenterApp.filter('temp',['$filter', 
	function($filter) {
	    return function(input, precision) {
	        if (!precision) {
	            precision = 0;
	        }
	        
	        var numberFilter = $filter('number');
	        
	        return numberFilter(input, precision) + '\u00B0F';
		    };
	}
]);



