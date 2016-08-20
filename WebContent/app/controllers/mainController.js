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

    		console.log("TEST !");

    		gmailService.getAuthorization(event).then(function(success){
    			console.log("success");
    			gmailService.getLabels();
    			
    			gmailService.getEmails();
    			//.then(function(success){
//    				$scope.messages = success;
//    			}, function(failure){
//        			console.log("gmail messages failure");
//        		});

    		}, function(failure){
    			console.log("gmail labels failure");
    		});
    	}

        $scope.loadFeed=function(){ 
        	//https://www.rt.com/rss
        	//http://rss.cnn.com/rss/cnn_topstories.rss
            Feed.parseFeed("https://www.rt.com/rss" ).then(function(res){
                //$scope.loadButonText=angular.element(e.target).text();
                $scope.feeds=res.data.responseData.feed.entries;
            },function(failure){
    			alert("Feed load failure");
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
//            $scope.loadFeed();
//            $scope.authClick();
    		$scope.initEntirePage();
        });

    	$scope.$on("newMessageObj", function (event, args){
    		//console.log(args.obj.payload.headers);
    		//args.obj.payload.headers[13].value;
    		var message = {
    						snippet: "" + args.obj.snippet.replace("&#39;", "'") + "...",
    						date:undefined,
    						from: undefined,
    						subject: undefined
    		};

    		//Construct Message Obj
    		for(var i = 0; i< args.obj.payload.headers.length; i++){
    			switch(args.obj.payload.headers[i].name){
	    			case "Date":
	    				message.date = new Date(args.obj.payload.headers[i].value);
	    				break;
	    			case "From":
	    				var temp = args.obj.payload.headers[i].value;
	    				temp = temp.replace(">", "");
	    				temp = temp.replace("<", "");
	    				message.from = temp;
	    				break;
	    			case "Subject":
	    				message.subject = args.obj.payload.headers[i].value;
	    				break;
	    			default:
	    	        	//do nothing
	    				break;
    			}
    		}

    		//Waits for all angular models to be loaded and current digest cycle to complete
    		$timeout(function(){
    			//code
    			$scope.messages.push(message);
    		})
    	});
}]);