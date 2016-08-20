/**
 *  weatherDescriptionHashMap.js declares the hashmap for all weather descriptions
 */

/**
 *  hashmap('description code', { name: string, image: string, count: int, extreme: boolean } )
 */
var weatherDescriptions= {};

// Adding keys to the hashmap
/**
 *  Thunderstorm
 */
weatherDescriptions['200'] = { name: 'thunderstorm with light rain', image:"", count: 0, extreme: false };
weatherDescriptions['201'] = { name: 'thunderstorm with rain', image:"", count: 0, extreme: false };
weatherDescriptions['202'] = { name: 'thunderstorm with heavy rain', image:"", count: 0, extreme: false };
weatherDescriptions['210'] = { name: 'light thunderstorm', image:"", count: 0, extreme: false };
weatherDescriptions['211'] = { name: 'thunderstorm', image:"", count: 0, extreme: false };
weatherDescriptions['212'] = { name: 'heavy thunderstorm', image:"", count: 0, extreme: false };
weatherDescriptions['221'] = { name: 'ragged thunderstorm', image:"", count: 0, extreme: true };
weatherDescriptions['230'] = { name: 'thunderstorm with light drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['231'] = { name: 'thunderstorm with drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['232'] = { name: 'thunderstorm with heavy drizzle', image:"", count: 0, extreme: false };

/**
 *  Drizzle
 */
weatherDescriptions['300'] = { name: 'light intensity drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['301'] = { name: 'drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['302'] = { name: 'heavy intensity drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['310'] = { name: 'light intensity drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['311'] = { name: 'drizzle with rain', image:"", count: 0, extreme: false };
weatherDescriptions['312'] = { name: 'heavy intensity drizzle with rain', image:"", count: 0, extreme: false };
weatherDescriptions['313'] = { name: 'shower rain and drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['314'] = { name: 'heavy shower rain and drizzle', image:"", count: 0, extreme: false };
weatherDescriptions['321'] = { name: 'shower drizzle', image:"", count: 0, extreme: false };

/**
 *  Rain
 */
weatherDescriptions['500'] = { name: 'light rain', image:"", count: 0, extreme: false };
weatherDescriptions['501'] = { name: 'moderate rain', image:"", count: 0, extreme: false };
weatherDescriptions['502'] = { name: 'heavy intensity rain', image:"", count: 0, extreme: true };
weatherDescriptions['503'] = { name: 'very heavy rain', image:"", count: 0, extreme: false };
weatherDescriptions['504'] = { name: 'extreme rain', image:"", count: 0, extreme: false };
weatherDescriptions['511'] = { name: 'freezing rain', image:"", count: 0, extreme: false };
weatherDescriptions['520'] = { name: 'light intensity shower rain', image:"", count: 0, extreme: false };
weatherDescriptions['521'] = { name: 'shower rain', image:"", count: 0, extreme: false };
weatherDescriptions['522'] = { name: 'heavy intensity shower rain', image:"", count: 0, extreme: false };
weatherDescriptions['531'] = { name: 'ragged shower rain', image:"", count: 0, extreme: false };

/**
 *  Snow
 */
weatherDescriptions['600'] = { name: 'light snow', image:"", count: 0, extreme: false };
weatherDescriptions['601'] = { name: 'snow', image:"", count: 0, extreme: false };
weatherDescriptions['602'] = { name: 'heavy snow', image:"", count: 0, extreme: false };
weatherDescriptions['611'] = { name: 'sleet', image:"", count: 0, extreme: false };
weatherDescriptions['612'] = { name: 'shower sleet', image:"", count: 0, extreme: false };
weatherDescriptions['615'] = { name: 'light rain and snow', image:"", count: 0, extreme: false };
weatherDescriptions['616'] = { name: 'rain and snow', image:"", count: 0, extreme: false };
weatherDescriptions['620'] = { name: 'light snow shower', image:"", count: 0, extreme: false };
weatherDescriptions['621'] = { name: 'snow shower', image:"", count: 0, extreme: false };
weatherDescriptions['622'] = { name: 'heavy snow shower', image:"", count: 0, extreme: true };

/**
 *  Atmosphere
 */
weatherDescriptions['701'] = { name: 'mist', image:"", count: 0, extreme: false };
weatherDescriptions['711'] = { name: 'smoke', image:"", count: 0, extreme: true };
weatherDescriptions['721'] = { name: 'haze', image:"", count: 0, extreme: false };
weatherDescriptions['731'] = { name: 'sand storm', image:"", count: 0, extreme: true };
weatherDescriptions['741'] = { name: 'fog', image:"", count: 0, extreme: false };
weatherDescriptions['751'] = { name: 'sand', image:"", count: 0, extreme: true };
weatherDescriptions['761'] = { name: 'dust', image:"", count: 0, extreme: true };
weatherDescriptions['762'] = { name: 'volcanic ash', image:"", count: 0, extreme: true };
weatherDescriptions['771'] = { name: 'squalls', image:"", count: 0, extreme: true };
weatherDescriptions['781'] = { name: 'tornado', image:"", count: 0, extreme: true };


/**
 *  Clouds
 */
weatherDescriptions['800'] = { name: 'clear sky', image:"", count: 0, extreme: false };
weatherDescriptions['801'] = { name: 'few clouds', image:"", count: 0, extreme: false };
weatherDescriptions['802'] = { name: 'scattered clouds', image:"", count: 0, extreme: false };
weatherDescriptions['803'] = { name: 'broken clouds', image:"", count: 0, extreme: false };
weatherDescriptions['804'] = { name: 'overcast clouds', image:"", count: 0, extreme: false };

/**
 * Extreme
 */
weatherDescriptions['900'] = { name: 'tornado', image:"", count: 0, extreme: true};
weatherDescriptions['901'] = { name: 'tropical storm', image:"", count: 0, extreme: true};
weatherDescriptions['902'] = { name: 'hurricane', image:"", count: 0, extreme: true };
weatherDescriptions['903'] = { name: 'extreme cold', image:"", count: 0, extreme: true};
weatherDescriptions['904'] = { name: 'extreme heat', image:"", count: 0, extreme: true};
weatherDescriptions['905'] = { name: 'extreme wind', image:"", count: 0, extreme: true };
weatherDescriptions['906'] = { name: 'hail', image:"", count: 0, extreme: true };

/**
 * Additional
 */
weatherDescriptions['951'] = { name: 'calm', image:"", count: 0, extreme: false };
weatherDescriptions['952'] = { name: 'light breeze', image:"", count: 0, extreme: false };
weatherDescriptions['953'] = { name: 'gentle breeze', image:"", count: 0, extreme: false };
weatherDescriptions['954'] = { name: 'moderate breeze', image:"", count: 0, extreme: false };
weatherDescriptions['955'] = { name: 'fresh breeze', image:"", count: 0, extreme: false };
weatherDescriptions['956'] = { name: 'strong breeze', image:"", count: 0, extreme: false };
weatherDescriptions['957'] = { name: 'high wind, near gale', image:"", count: 0, extreme: false };
weatherDescriptions['958'] = { name: 'gale', image:"", count: 0, extreme: true };
weatherDescriptions['959'] = { name: 'severe gale', image:"", count: 0, extreme: true };
weatherDescriptions['960'] = { name: 'storm', image:"", count: 0, extreme: false };
weatherDescriptions['961'] = { name: 'violent storm', image:"", count: 0, extreme: true };
weatherDescriptions['962'] = { name: 'hurricane', image:"", count: 0, extreme: true };

/**
 * Sets count field for entire weatherDescriptions hashmap to 0.
 */
function resetWeatherDescriptionsCount(){
	for (var id in weatherDescriptions)
	{
		weatherDescriptions[id]['count'] = 0;
	}
}

/**
 * Searches entire hashmap for the weather description with the highest count.
 *
 * @returns weatherConditions name field.
 */
function findMaxWeatherDescription(){

	var tempMax = weatherDescriptions['200'];

	for (var id in weatherDescriptions)
	{
		if(tempMax['extreme'] === true){
			tempMax = weatherDescriptions[id];
			break;
		}
		if(tempMax['count'] < weatherDescriptions[id]['count']){
			tempMax = weatherDescriptions[id];
		}
	}

	resetWeatherDescriptionsCount();

	return tempMax.name;
}






