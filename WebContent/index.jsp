<!-- 
	index.html is the entire point for the entire application.
	It includes all resources for the entire app.
 -->

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app='mediaCenterApp'>
<head>

<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular.min.js"></script>

<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular-route.js"></script>


<!--   <!-- Angular Material Library -->
<!--   <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js"></script> -->
<!-- <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js"></script> -->
<!-- <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js"></script> -->
<!-- <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-messages.min.js"></script> -->


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
	crossorigin="anonymous">

<!-- <!-- Latest compiled and minified JQuery. Needed for BootstrapJS -->
<!-- <script src="https://code.jquery.com/jquery-2.2.3.min.js" -->
<!--   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" -->
<!--   crossorigin="anonymous"> -->
<!-- </script> -->

<!-- <!-- Latest compiled and minified JavaScript -->
<!-- <script -->
<!--   src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" -->
<!--   integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" -->
<!--   crossorigin="anonymous"> -->
<!-- </script> -->


<link rel="stylesheet" type="text/css" href="css/style.css" />

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Multi Media Center</title>


<script type="text/javascript">
	//      // Your Client ID can be retrieved from your project in the Google
	// 			      // Developer Console, https://console.developers.google.com
	// 			      var CLIENT_ID = '781793325393-sv51mecb15he072hpkantrph67e9tuhi.apps.googleusercontent.com';

	// 			      var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

	// 			      /**
	// 			       * Check if current user has authorized this application.
	// 			       */
	// 			      function checkAuth() {
	// 			        gapi.auth.authorize(
	// 			          {
	// 			            'client_id': CLIENT_ID,
	// 			            'scope': SCOPES.join(' '),
	// 			            'immediate': true
	// 			          }, handleAuthResult);
	// 			      }

	// 			      /**
	// 			       * Handle response from authorization server.
	// 			       *
	// 			       * @param {Object} authResult Authorization result.
	// 			       */
	// 			      function handleAuthResult(authResult) {
	// 			        var authorizeDiv = document.getElementById('authorize-div');
	// 			        if (authResult && !authResult.error) {
	// 			          // Hide auth UI, then load client library.
	// 			          authorizeDiv.style.display = 'none';
	// 			          loadGmailApi();
	// 			        } else {
	// 			          // Show auth UI, allowing the user to initiate authorization by
	// 			          // clicking authorize button.
	// 			          authorizeDiv.style.display = 'inline';
	// 			        }
	// 			      }

	// 			      /**
	// 			       * Initiate auth flow in response to user clicking authorize button.
	// 			       *
	// 			       * @param {Event} event Button click event.
	// 			       */
	// 			      function handleAuthClick(event) {
	// 			        gapi.auth.authorize(
	// 			          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
	// 			          handleAuthResult);
	// 			        return false;
	// 			      }

	// 			      /**
	// 			       * Load Gmail API client library. List labels once client library
	// 			       * is loaded.
	// 			       */
	// 			      function loadGmailApi() {
	// 			        gapi.client.load('gmail', 'v1', listLabels);
	// 			      }

	// 			      /**
	// 			       * Print all Labels in the authorized user's inbox. If no labels
	// 			       * are found an appropriate message is printed.
	// 			       */
	// 			      function listLabels() {
	// 			        var request = gapi.client.gmail.users.labels.list({
	// 			          'userId': 'me'
	// 			        });

	// 			        request.execute(function(resp) {
	// 			          var labels = resp.labels;
	// 			          appendPre('Labels:');

	// 			          if (labels && labels.length > 0) {
	// 			            for (i = 0; i < labels.length; i++) {
	// 			              var label = labels[i];
	// 			              appendPre(label.name)
	// 			            }
	// 			          } else {
	// 			            appendPre('No Labels found.');
	// 			          }
	// 			        });
	// 			      }

	// 			      function appendPre(message) {
	// 			          var pre = document.getElementById('output');
	// 			          var textContent = document.createTextNode(message + '\n');
	// 			          pre.appendChild(textContent);
	// 			        }
</script>

</script>
<script src="https://apis.google.com/js/client.js?onload=checkAuth">
	
</script>




</head>
<body>

	<!--  dynamic div -->
	<!-- place holder for our views from or router -->
	<div ng-view></div>
	
	<!--  main app that routes entire application -->
	<script src="app/app.js"> </script>
	
	<!--	filters -->
	<script src="app/filters/temperatureFilter.js"> </script>
	<script src="app/filters/precipitationFilter.js"> </script>
	<script src="app/filters/windFilter.js"> </script>
	<script src="app/filters/variantsFilter.js"> </script>
	
	<!-- 	directives -->
	<script src="app/directives/weatherDetailsDirective.js"> </script>
	<script src="app/directives/weatherFullDetailsDirective.js"> </script>
	<script src="app/directives/weatherIconDirective.js"> </script>
	<script src="app/directives/gMailInboxDirective.js"> </script>
	
	<!-- 	services -->
	<script src="app/services/gmailService.js"> </script>
	<script src="app/services/weatherService.js"> </script>
	<script src="app/services/feedService.js"> </script>
	
	<!-- 	utilities -->
	<script src="util/weatherConditionHashMap.js"> </script>
	<script src="util/weatherDescriptionHashMap.js"> </script>
	
	<!-- 	controllers -->
	<script src="app/controllers/mainController.js"> </script>

</body>
</html>



