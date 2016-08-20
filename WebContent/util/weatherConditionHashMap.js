/**
 *  weatherConditionHashMap.js declares the hashmap for all weather conditions.
 */

/**
 *  hashmap('icon code', {name: string, image: string, count: int })
 */
var weatherConditions = {};

// Adding keys to the hashmap
weatherConditions['01'] = { name: 'clearSky', image:"", count: 0 };
weatherConditions['02'] = { name: 'fewClouds', image:"", count: 0 };
weatherConditions['03'] = { name: 'scatteredClouds', image:"", count: 0 };
weatherConditions['04'] = { name: 'brokenClouds', image:"", count: 0 };
weatherConditions['09'] = { name: 'showerRain', image:"", count: 0 };
weatherConditions['10'] = { name: 'rain', image:"", count: 0 };
weatherConditions['11'] = { name: 'thunderstorm', image:"", count: 0 };
weatherConditions['13'] = { name: 'snow', image:"", count: 0 };
weatherConditions['50'] = { name: 'mist', image:"", count: 0 };

/**
 * Sets count field for entire weatherConditions hashmap to 0.
 */
function resetWeatherConditionsCount(){
	for (var id in weatherConditions)
	{
		weatherConditions[id]['count'] = 0;
	}
}

/**
 * Searches entire hashmap for the weather condition with the highest count.
 *
 * @returns weatherConditions name field
 */
function findMaxWeatherCondition(){

	var tempMax = weatherConditions['01'];

	for (var id in weatherConditions)
	{
		if(tempMax['count'] < weatherConditions[id]['count']){
			tempMax = weatherConditions[id];
		}
	}

	resetWeatherConditionsCount();

	return tempMax.name;
}