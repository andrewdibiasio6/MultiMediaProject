/**
 * Contains all Service calls to google's APIs
 */

mediaCenterApp.service('gmailService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope, Feed) {
	return {
		
		 getAuthorization: function(event){
			 
			 var getAuthorizationPromise = $q.defer();

			 // Your Client ID can be retrieved from your project in the Google
		      // Developer Console, https://console.developers.google.com
		      var CLIENT_ID = '781793325393-sv51mecb15he072hpkantrph67e9tuhi.apps.googleusercontent.com';
	
		      var SCOPES = ['https://mail.google.com/mail/feed/atom', 'https://www.googleapis.com/auth/gmail.readonly'];

		      /**
		       * Initiate auth flow in response to user clicking authorize button.
		       *
		       * @param {Event} event Button click event.
		       */
		      function handleAuthClick(event) {
		        gapi.auth.authorize(
		          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
		          handleAuthResult);
		       
		        return false;
		      }
		      
		      /**
		       * Handle response from authorization server.
		       *
		       * @param {Object} authResult Authorization result.
		       */
		      function handleAuthResult(authResult) {
		        var authorizeDiv = document.getElementById('authorize-div');
		        if (authResult && !authResult.error) {
		        	var success = {};
		        
		          // Hide auth UI, then load client library.
		          authorizeDiv.style.display = 'none';
		        //http request was successful, resolve with fiveDayForecast array.
		          	success = loadGmailApi();
		        	//http request was successful, resolve with fiveDayForecast array.
		        	getAuthorizationPromise.resolve(success);
		        } else {
		          // Show auth UI, allowing the user to initiate authorization by
		          // clicking authorize button.
		          authorizeDiv.style.display = 'inline';
		          getAuthorizationPromise.resolve(failure);
		        }
		      }
	
		          /**
			       * Load Gmail API client library. List labels once client library
			       * is loaded.
			       */
			      function loadGmailApi() {
			        return gapi.client.load('gmail', 'v1'); //, listLabels
			      }
	
//		      /**
//		       * Print all Labels in the authorized user's inbox. If no labels
//		       * are found an appropriate message is printed.
//		       */
//		      function listLabels() {
//		        var request = gapi.client.gmail.users.labels.list({
//		          'userId': 'me'
//		        });
//	
//		        request.execute(function(resp) {
//		        	
////		        	$rootScope.$apply(function () {
////                        success = resp;
////                    });
//					 var labels = resp.labels;
//					 appendPre('Labels:');
//						
//					 if (labels && labels.length > 0)
//					 {
//					 for (i = 0; i < labels.length;
//					 i++) {
//					 var label = labels[i];
//					 appendPre(label.name)
//					 }
//							          } else {
//							            appendPre('No Labels found.');
//							          }
//		        });
//		        
////		        $scope.loadButonText="Load";
////		        $scope.loadFeed=function(e){        
////		            Feed.parseFeed('https://mail.google.com/mail/feed/atom/INBOX').then(function(res){
////		                $scope.loadButonText=angular.element(e.target).text();
////		                $scope.feeds=res.data.responseData.feed.entries;
////		            });
////		        }
//		      }
		      
		      /**
		       * Check if current user has authorized this application.
		       */
		      function checkAuth() {
		        gapi.auth.authorize(
		          {
		            'client_id': CLIENT_ID,
		            'scope': SCOPES.join(' '),
		            'immediate': true
		          }, handleAuthResult);
		      }

		      handleAuthClick(event);
		      
		      return getAuthorizationPromise.promise;
		},
		
		getLabels: function(){

		      /**
		       * Print all Labels in the authorized user's inbox. If no labels
		       * are found an appropriate message is printed.
		       */
		      function listLabels() {
		        var request = gapi.client.gmail.users.labels.list({
		          'userId': 'me'
		        });
	
		        request.execute(function(resp) {
					 var labels = resp.labels;
					 appendPre('Labels:');
						
					 if (labels && labels.length > 0)
					 {
					 for (i = 0; i < labels.length;
					 i++) {
					 var label = labels[i];
					 appendPre(label.name)
					 }
				          } else {
				            appendPre('No Labels found.');
				          }
		        });
		      }
		      
		      listLabels();
		      
//		      // http jsonp will return parsed json if successfull.
//  	        $http.get("https://www.googleapis.com/gmail/v1/users/me/messages").then(function(data) {
//  	        	console.log(data);
//  	        });
		      
		      
		      return;
		},
		
		getEmails: function(){
			
			//var getEmailsPromise = $q.defer();
			
			var success = [];
			
			/**
			 * Get Message with given ID.
			 *
			 * @param  {String} userId User's email address. The special value 'me'
			 * can be used to indicate the authenticated user.
			 * @param  {String} messageId ID of Message to get.
			 * @param  {Function} callback Function to call when the request is complete.
			 */
				
			//https://www.googleapis.com/gmail/v1/users/me/messages/1550bbca15cd5b71
			////GET https://mail.google.com/mail/feed/atom/
			
			
			function getMessage(userId, messageId, callback){
				
//				var getforecastPromise = $q.defer();
//				
//				// http jsonp will return parsed json if successfull.
//		        $http.get('https://www.googleapis.com/gmail/v1/users/me/messages/1550bbca15cd5b71').then(function(success) {
//		        	//http request was successful, resolve with fiveDayForecast array.
//		        	getforecastPromise.resolve(success);
//		        },
//
//		        //http request failed, resolve with failure.
//		        function(failure) {
//		        	getforecastPromise.resolve(failure);
//		        });
//
//		        return getforecastPromise.promise;
//		      }
//		        
//
			  var request = gapi.client.gmail.users.messages.get({
			    'userId': userId,
			    'id': messageId,
			    'format': 'full'
			  });
			  return request.execute(function(resp) {
				  console.log(resp);
				  success.push(resp);
				  
				  $rootScope.$broadcast("newMessageObj", {
					  obj: resp
				  });

			  })
			}
				

		      /**
		       * Print all Emails in the authorized user's inbox. If no messages
		       * are found an appropriate message is printed.
		       */
		      function listMessages() {
		    	  var messages = [];

		        var request = gapi.client.gmail.users.messages.list({
		          'userId': 'me'
		        });
	
		        request.execute(function(resp) {
					 var messageIDS = resp.messages;

					 if (messageIDS && messageIDS.length >= 20)
					 {
						 for (i = 0; i <= 20; i++) {
							 var id = messageIDS[i].id;
							 var tempMessage = getMessage('me', id);
							 success.push(tempMessage);
						 }
						 return success;
			          } else {
			            appendPre('No Messages found.');
			            //getEmailsPromise.resolve(failure);
			          }
		        });
		      }
		      
		     return listMessages();
		     //getEmailsPromise.resolve(success);
		     //return success; 
		}
	}
}]);

function appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }

