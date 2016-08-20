/**
 *  weatherService.js is used to pull all forecast information from openweathermap in json format.
 *  It then populates a weather forecast object with the needed info for the view.
 */

/** The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 *  With strict mode, you can not, for example, use undeclared variables.
 */
'use strict';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=';
const END_URL = '&units=imperial&APPID=0069acbbeaf518c1780b2e48b72947ad';

const BASE_CURRENT_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?id=';
const END_CURRENT_WEATHER_URL = '&units=imperial&APPID=0069acbbeaf518c1780b2e48b72947ad';

/**
 *  forecastService is used to pull all forecast information from openweathermap in json format.
 *  It then populates a weather forecast object with the needed info for the view.
 */
mediaCenterApp.service('forecastService', ['$http', '$q', function($http, $q) {
	return {

	  /**
	   *  @Param city ID
	   *  @Return fiveDayForecast obj or failure
	   */
      getforecast: function(id) {

    	var getforecastPromise = $q.defer();
    	var url = null;

    	//Holds 5 forecast objs
    	var fiveDayForecast = [];
    	
    	//holds detailed forecast for first of the five days
    	var firstDayForecast = [];

    	//used to hold location of forecast request
    	var location;

    	//todays date
    	var currentDate = new Date();

    	// current day today
    	var dayCount = currentDate.getDate();

    	//boolean that is true if we are still on first of the five days
    	var firstDayFlag = true;

    	// Changes location field based on city ID
        switch(id) {
	        case BOSTON_ID:
	        	//Build url for http request
	        	url = BASE_URL + "4943828" + END_URL;
	        	//Set location variable to given location.
	        	location = "Boston, MA";
	        	break;
        }

        // http jsonp will return parsed json if successfull.
        $http.get(url).then(function(data) {

        	//list of data objs returned for http request
        	var dataList = data.data.list;
        	
        	//Holds all current temps found
        	var currentTemps= [];

        	//Loop through entire array returned by http request
        	for(var i= 0; i<dataList.length; i++){
        		
        		var fullDetailsForecast = {
											temp: {
													average: undefined,
													min: undefined,
													max: undefined
			  									   },
											weatherDescription: undefined,
											location: location,
											date: undefined,
											weatherIcon: undefined,
											weatherVariants: {
																clouds: undefined,
																rain: undefined,
																wind: undefined,
																snow: undefined
															 }
        								   };

        		// current day in forecast json
        		var day = new Date(dataList[i].dt * 1000).getDate();

        		/* If the day today isn't the same as the current day in forecast json
        		 * We must finish this forecast obj by analyzing all data we found so far,
        		 * push that obj to array, then start a new forecast obj. If we are on first
        		 * iteration  of loop, go through once.
        		 */
        		if(dayCount != day || i === 0){

        			//Don't enter here in first iteration because no information has been gathered.
            		if(i !== 0){

            			//Set to average temp from array of all current temps
            			forecastAverage.temp.average = averageValueOfArrayOfInts(currentTemps);

            			//Set to most common weather condition
            			forecastAverage.weatherIcon = findMaxWeatherCondition();

            			//Set to most common weather description
            			forecastAverage.weatherDescription = findMaxWeatherDescription();

            			//Push finished forecast obj to array
            			fiveDayForecast.push(forecastAverage);
            			
            			/**
            			 * Finished creating and pushing forecast obj for this day of week.
            			 * Move to next day of week.
            			 */
            			dayCount += 1;
            			
            			//no longer first of the five days
            			firstDayFlag = false;
            		}

            		//Declare new forecast obj.
            		var forecastAverage = {
				            				temp: {
				            						average: undefined,
				            						min: 99,
				            						max: -99
				            					  },
				            				weatherDescription: undefined,
				            				location: location,
				            				date: dataList[i].dt,
				            				weatherIcon: undefined
            					   		   };
        		}//End of if statement
        		
        		//If dataList is defined
	        	if (dataList[i]) {

	        		//If main is defined
	                if (dataList[i].main ) {
	                	
	                	fullDetailsForecast.temp.max = dataList[i].main.temp_max;
	                	
	                	fullDetailsForecast.temp.min = dataList[i].main.temp_min;
	                	
	                	fullDetailsForecast.temp.average = dataList[i].main.temp;

	                	//If current max is less than next max, replace current max with next max.
	                	if(forecastAverage.temp.max < dataList[i].main.temp_max){
	                		forecastAverage.temp.max = dataList[i].main.temp_max;
	                	}

	                	//If current min is greater than next min, replace current min with next min.
	                	if(forecastAverage.temp.min > dataList[i].main.temp_min){
	                		forecastAverage.temp.min = dataList[i].main.temp_min;
	                	}

	                	//Push temp to currentTemps array to be used to find avg later.
	                	currentTemps.push(dataList[i].main.temp);
	                }

	                //If weather is defined
	                if(dataList[i].weather){

	                	//Temp to hold icon id.
	                	var iconStrTemp = dataList[i].weather[0].icon;

	                	//Removing the trailing d or n char.
	                	var iconIDTemp = iconStrTemp.substring(0, iconStrTemp.length - 1);
	                	
	                	fullDetailsForecast.weatherIcon = weatherConditions[iconIDTemp]['name'];

	                	//Increasing count for that weather condition in hashmap.
	                	weatherConditions[iconIDTemp]['count']++;

	                	//Temp to hold icon id.
	                	var descriptionIDTemp = dataList[i].weather[0].id;

	                	fullDetailsForecast.weatherDescription = weatherDescriptions[descriptionIDTemp]['name'];
	                	
	                	//Increasing count for that weather description in hashmap.
	                	weatherDescriptions[descriptionIDTemp]['count']++;
	                	
	                	//add date to fullDetailsForecast
	                	fullDetailsForecast["date"] = dataList[i].dt;
	                }
	                
	              //If clouds is defined
	                if(dataList[i].clouds){
	                	//declare and populate clouds field with cloud data from http request
	                	fullDetailsForecast.weatherVariants.clouds = dataList[i].clouds.all;
	                }
	                
	              //If rain is defined
	                if(dataList[i].rain){
	                	//declare and populate rain field with cloud data from http request
	                	fullDetailsForecast.weatherVariants.rain = dataList[i].rain['3h'];
	                }
	                
	                //if wind is defined
	                if(dataList[i].wind){
	                	//declare and populate wind field with cloud data from http request
	                	fullDetailsForecast.weatherVariants.wind = dataList[i].wind.speed;
	                }
	                
	              //if snow is defined
	                if(dataList[i].snow){
	                	//declare and populate wind field with cloud data from http request
	                	fullDetailsForecast.weatherVariants.snow = dataList[i].snow['3h'];
	                }
	            }//End of if statement for "if data is defined"
	        	
	        	//only push for first 24 hours
    			if(firstDayForecast.length !== 8){
    				firstDayForecast.push(fullDetailsForecast);
    			}
    			
        	}//End of for loop

        	var success = [fiveDayForecast, firstDayForecast];
        	
        	//http request was successful, resolve with fiveDayForecast array.
        	getforecastPromise.resolve(success);
        },

        //http request failed, resolve with failure.
        function(failure) {
        	getforecastPromise.resolve(failure);
        });

        return getforecastPromise.promise;
      }
    };
}]);

/**
 * Used to find avgerage value of array. EMPTIES GIVEN ARRAY
 * @param array
 * @returns {Number}
 */
function averageValueOfArrayOfInts(array){

	var arraySize = 0;

	var sumTemp = 0;

	while(array[0] != undefined){
		//Pop values because array should be empty after this
		sumTemp += array.pop();
		arraySize ++;
	}

	return sumTemp / arraySize
}


