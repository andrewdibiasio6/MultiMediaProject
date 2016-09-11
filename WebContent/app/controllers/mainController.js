/** 
 * weatherController.js calls forecastService and adds location and fiveDayForecast to $scope
 */
mediaCenterApp.controller('mainCtrl',[
    '$scope',
    '$filter',
    '$http',
    '$timeout',
    'forecastService',
    'gmailService',
    'feedService',
    function ($scope, $filter, $http, $timeout, forecastService, gmailService, Feed) {

    	$scope.messages = [];
    	var tempArray = [];
    	
    	$scope.authInit = function(event){

    		gmailService.getAuthorization(event).then(function(success){
    			console.log("success");
    			//gmailService.getLabels();
    			
    			gmailService.getEmails();
    		}, function(failure){
    			errorPrepend("gmail Auth failure");
    		});
    	}

        $scope.loadFeed=function(){ 
        	//https://www.rt.com/rss
        	//http://rss.cnn.com/rss/cnn_topstories.rss
            Feed.parseFeed("https://www.rt.com/rss" ).then(function(res){
                //$scope.loadButonText=angular.element(e.target).text();
                $scope.feeds=res.data.responseData.feed.entries;
            },function(failure){
            	errorPrepend("Feed load failure");
            });
        }
        
        $scope.initEntirePage = function(){
        	$scope.loadFeed();
            $scope.authInit();
            
            //call forecast service with given ID
        	forecastService.getforecast(BOSTON_ID).then(function(success){
        		 $scope.fiveDayForecast = success[0];
        		 $scope.firstDayForecast = success[1];
        		 $scope.location =  $scope.fiveDayForecast[0].location;
        	 });
        }

        //initializes page
    	angular.element(document).ready(function () {
    		$scope.initEntirePage();
        });

    	//Listener for newMessageObj broadcast from gmailService
    	$scope.$on("newMessageObj", function (event, args){
    		//Waits for all angular models to be loaded and current digest cycle to complete
    		$timeout(function(){
    			$scope.messages.push(args.obj);
    		})
    	});
    	
        function errorPrepend(message) {
            var pre = document.getElementById('errorOutput');
            var textContent = document.createTextNode(message + '\n');
            pre.appendChild(textContent);
          }
}]);