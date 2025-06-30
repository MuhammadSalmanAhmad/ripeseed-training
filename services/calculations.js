import { calculateAverage, extractValuesByKey } from "./utils.js";

//METHODS TO PERFORM CALCULATION FOR EXTREME-VALUE REPORT
export function maxTempInYear(maxTemperatures) {
  let date;
  const maxTemp = maxTemperatures.reduce((Max, item) => {
    let temp = Number(item["Temperature"]);
    if (temp > Max) {
      Max = temp;
      date = item["Date"];
    }
    return Max;
  }, -Infinity);
  return { date, maxtemp: maxTemp };
}

export function lowestTempInYear(lowestTemperatures) {
  let date;
  const minTemp = lowestTemperatures.reduce((Min, item) => {
    let temp = Number(item["Temperature"]);
    if ((temp !== 0) & (temp < Min)) {
      Min = temp;
      date = item["Date"];
    }
    return Min;
  }, +Infinity);
  return { date, minTemp };
}

export function maxHumidDayInYear(maxHumidityValues) {
  let date;
  const maxHumidity = maxHumidityValues.reduce((MaxHumidity, item) => {
    let humidity = Number(item["Humidity"]);
    if (humidity > MaxHumidity) {
      MaxHumidity = humidity;
      date = item["Date"];
    }
    return MaxHumidity;
  }, -Infinity);
  return { date, maxHumidity };
}

export function yearExtremeCalculator(yearWeatherReading) {
  let extremeValues = yearWeatherReading.flat().map((dayReadng) => {
    return {
      maxTemp: {
        Date: dayReadng.get("PKT"),
        Temperature: dayReadng.get("Max TemperatureC"),
      },
      minTemp: {
        Date: dayReadng.get("PKT"),
        Temperature: dayReadng.get("Min TemperatureC"),
      },
      maxHumidity: {
        Date: dayReadng.get("PKT"),
        Humidity: dayReadng.get("Max Humidity"),
      },
    };
  });

  return [
    maxHumidDayInYear(extremeValues.map((value) => value.maxHumidity)),
    maxTempInYear(extremeValues.map((value) => value.maxTemp)),
    lowestTempInYear(extremeValues.map((value) => value.minTemp)),
    
  ];
}

//METHOD FOR MONTHLY CHART REPORT CALCULATION

export function chartReportCalculator(weatherData) {
  return [
    extractValuesByKey("Max TemperatureC", weatherData),
    extractValuesByKey("Min TemperatureC", weatherData),
  ];
}

//METHOD FOR MONTHLY AVERAGE CALCULATIONS.

export function avgRecordCalulator(weatherData) {
  return {
    avgMaxTemp: calculateAverage("Max TemperatureC", weatherData),
    avgMinTemp: calculateAverage("Min TemperatureC", weatherData),
    avgMeanHumidity: calculateAverage("Mean Humidity", weatherData),
  };
}
