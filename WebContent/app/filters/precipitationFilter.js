/**
 *  precipitationFilter.js contains the precipitation filter. This filter is used to 
 *  set the precision for rain and snow variant fields.
 */
mediaCenterApp.filter('precipitation',['$filter', 
  function($filter) {
    return function(input, precision) {
        if (!precision) {
            precision = 1;
        }
        
        var numberFilter = $filter('number');
        
        return numberFilter((0.2 * 0.0393701), precision) + " in";
  	    };
  }
]);