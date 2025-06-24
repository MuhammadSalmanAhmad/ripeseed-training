import {
  calculateAverage,
  extractValuesByKey,
} from "../utilities/calculation-functions.js";

//METHODS TO PERFORM CALCULATION FOR EXTREME-VALUE REPORT
export function maxTempInYear(maxTemperatures) {
  let date;

  const maxtemp = maxTemperatures.reduce((Max, item) => {
    let temp = Number(item.Temperature);
    if (temp > Max) {
      Max = temp;
      date = item.Date;
    }
    return Max;
  }, -Infinity);

  return { date, maxtemp };
}

export function lowestTempInYear(lowestTemperatures) {
  let date;

  const minTemp = lowestTemperatures.reduce((Min, item) => {
    let temp = Number(item.Temperature);
    if ((temp !== 0) & (temp < Min)) {
      Min = temp;
      date = item.Date;
    }
    return Min;
  }, +Infinity);

  return { date, minTemp };
}

export function maxHumidDayInYear(maxHumidityValues) {
  let date;
  const maxHumidity = maxHumidityValues.reduce((MaxHumidity, item) => {
    let humidity = Number(item.Humidity);
    if (humidity > MaxHumidity) {
      MaxHumidity = humidity;
      date = item.Date;
    }
    return MaxHumidity;
  }, -Infinity);

  return { date, maxHumidity };
}

export function yearExtremeValues(yearWeatherReading) {
  const maxTemperatures = [];
  const lowestTemperatures = [];
  const maxHumidityValues = [];

  for (let monthReading of yearWeatherReading) {
    for (let dayReading of monthReading) {
      maxTemperatures.push({
        Date: dayReading.get("PKT"),
        Temperature: dayReading.get("Max TemperatureC"),
      });

      lowestTemperatures.push({
        Date: dayReading.get("PKT"),
        Temperature: dayReading.get("Min TemperatureC"),
      });

      maxHumidityValues.push({
        Date: dayReading.get("PKT"),
        Humidity: dayReading.get("Max Humidity"),
      });
    }
  }

  const maxHumidity = maxHumidDayInYear(maxHumidityValues);
  const minTemp = lowestTempInYear(lowestTemperatures);
  const maxTemp = maxTempInYear(maxTemperatures);

  return [maxHumidity, maxTemp, minTemp];
}

//METHODS FOR CHART REPORT CALCULATION

export function maxTemperatures(weatherData) {
  let maxTemperatures = [];
  extractValuesByKey("Max TemperatureC", maxTemperatures, weatherData);
  return maxTemperatures;
}

export function minTemperatures(weatherData) {
  let minTemperatures = [];
  extractValuesByKey("Min TemperatureC", minTemperatures, weatherData);
  return minTemperatures;
}

//METHODS FOR MONTHLY AVERAGE CALCULATIONS.

export function averageMaxTemperature(weatherData) {
  let averageMaxTemperature = 0;
  averageMaxTemperature = calculateAverage("Max TemperatureC", weatherData);
  return averageMaxTemperature;
}

export function averageLowestTemperature(weatherData) {
  let averageMinTemperature = 0;
  averageMinTemperature = calculateAverage("Min TemperatureC", weatherData);
  return averageMinTemperature;
}

export function averageMeanHumidity(weatherData) {
  let averageMeanHumidity = 0;
  averageMeanHumidity = calculateAverage("Mean Humidity", weatherData);
  return averageMeanHumidity;
}
