/**
 *  rssFeedDirective.js adds the template Url to the directive.
 */
mediaCenterApp.directive('rssFeed',[ function() {
    return {
    	templateUrl: 'app/partials/rssFeedView.html'
    };
}]);