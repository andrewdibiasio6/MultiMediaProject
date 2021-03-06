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
	
		      var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];

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
						
					 if (labels && labels.length > 0){
						 for (i = 0; i < labels.length;i++) {
							 var label = labels[i];
							 appendPre(label.name)
						 }
			          } else {
			            appendPre('No Labels found.');
			          }
		        });
		      }

		      listLabels();
		      return;
		},
		
		getEmails: function(){

			//Holds list of emails.
			var emailList = [];

		      /**
		       * Print all emails in the authorized user's inbox. If no messages
		       * are found an appropriate message is printed.
		       */
		      function listMessages() {

		        var request = gapi.client.gmail.users.messages.list({
		          'userId': 'me'
		        });
	
		        request.execute(function(resp) {
					 var messageIDS = resp.messages;

					 if (messageIDS && messageIDS.length >= 20)
					 {
						 getMessage('me', messageIDS);
			          } else {
			        	  errorPrepend('No Messages found.');
			          }
		        });
		      }
		      
	      	/**
			 * Get Message with given ID.
			 *
			 * @param  {String} userId User's email address. The special value 'me'
			 * can be used to indicate the authenticated user.
			 * @param  {String} messageId ID of Message to get.
			 * @param  {Function} callback Function to call when the request is complete.
			 */
			function getMessage(userId, messageIds, callback){

				 var messageList = [];
			
				 for (i = 0; i <= 20; i++) {
	
					 var id = messageIds[i].id;
					 
					 var request = gapi.client.gmail.users.messages.get({
						    'userId': userId,
						    'id': id,
						    'format': 'full'
						  });
						  
					  request.then(function(resp) {
						 var resultObj = resp.result;
						//New message obj
						  var message = {
		  						snippet: "" + resultObj.snippet.replace("&#39;", "'") + "...",
		  						date:undefined,
		  						from: undefined,
		  						subject: undefined
					  		};
					
					  		//Populate Message Obj
				    		for(var i = 0; i< resultObj.payload.headers.length; i++){
					  			switch(resultObj.payload.headers[i].name){
						    			case "Date":
						    				message.date = new Date(resultObj.payload.headers[i].value);
						    				break;
						    			case "From":
						    				var temp = resultObj.payload.headers[i].value;
						    				temp = temp.replace(">", "");
						    				temp = temp.replace("<", "");
						    				message.from = temp;
						    				break;
						    			case "Subject":
						    				message.subject = resultObj.payload.headers[i].value;
						    				break;
						    			default:
						    	        	//do nothing
						    				break;
					  			}
				    		}
				    		broadCast(message);
					  }, function(reason) {
					    // Handle error
					  });
				}
			}
			//Kick off email gathering.
			return listMessages();
		}
	}
	
	function broadCast(obj){
		$rootScope.$broadcast("newMessageObj", {
			  obj: obj
		  });
	}
}]);