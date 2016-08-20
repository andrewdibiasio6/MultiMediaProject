/**
 * app.js contains all the routing for the entire application.
 */

/** The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 *  With strict mode, you can not, for example, use undeclared variables.
 */
'use strict';

const BOSTON_ID = "4487042"; 
const RT_NEWS_FEED = "https://www.rt.com/rss/news";
const CNN_NEWS_FEED = "http://rss.cnn.com/rss/cnn_topstories.rss";

var mediaCenterApp = angular.module('mediaCenterApp', ['ngRoute'])  
	   
    	   .config(function($routeProvider) {
    			$routeProvider
    			.when('/view1',
    			{
    				controller: 'mainCtrl',
    				templateUrl: 'app/partials/view1.html'
    			})
    			.when('/view2',
    			{
//    				controller: 'stockListController',
//    				templateUrl: 'app/partials/view2.html'
    			})
    			.otherwise({redirectTo: '/view1'});	
    		});