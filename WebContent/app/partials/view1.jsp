<!-- 
	view1.jsp is the view that displays a 5 day general forcast. It is the landing page
	for the application.
 -->

<h1>{{(firstDayForecast[0].date * 1000)| date:'MMMM d, yyyy'}}</h1>


<h2>{{location}}</h2>


    <div id="authorize-div">
      <span>Authorize access to Gmail API</span>
      <!--Button for the user to click to initiate auth sequence -->
      <button id="authorize-button" ng-click="authClick(event)">
        Authorize
      </button>
    </div>
    <pre id="output"></pre>
     
     
    
<!--     custom directive that returns template html from weatherDetailsView.html -->
   <div><weather-details> </weather-details> </div> 
<br/>
<!--     custom directive that returns template html from weatherFullDetailsView.html -->
    <div><weather-full-details> </weather-full-details></div>
<br/>
<!--     custom directive that returns template html from gMailInboxView.html -->
    <div><g-mail-inbox> </g-mail-inbox></div>
    
    
    
<!--     <div class="row-fluid"> -->
<!--             <ul class="unstyled"> -->
<!--                 <span class="badge badge-warning" ng-show="feeds.length > 0">{{(feeds | filter:filterText).length}} Items</span> -->
<!--                 <li ng-repeat="feed in feeds | filter:filterText">                     -->
<!--                     <h5><a href="{{feed.link}}">{{feed.title}}</a></h5>                                         -->
<!--                     <p class="text-left">{{feed.contentSnippet}}</p>                     -->
<!--                     <span class="small">{{feed.publishedDate}}</span> -->
<!--                 </li>                 -->
<!--             </ul>             -->
<!--         </div> -->
        