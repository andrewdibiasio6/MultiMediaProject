/**
 * weatherIconDetails.js adds the image associated with the condition to the html template.
 */

mediaCenterApp.directive('weatherIcon',[ function() {
    return {
        restrict: 'E', replace: true,
        scope: {
        	condition: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
            	
            	//url to an image file
            	return "images/" + $scope.condition + ".jpg";
            };
        },
        //template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
        template: '<div style="float:left">{{ imgurl() }}</div>'
    };
}]);