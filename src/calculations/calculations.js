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

  for (let data of weatherData) {
    data.forEach((value, key) => {
      if (key === "Max TemperatureC") {
        maxTemperatures.push(value);
      }
    });
  }
  return maxTemperatures;
}

export function minTemperatures(weatherData) {
  let minTemperatures = [];

  for (let data of weatherData) {
    data.forEach((value, key) => {
      if (key === "Min TemperatureC") {
        minTemperatures.push(value);
      }
    });
  }
  return minTemperatures;
}

//METHODS FOR MONTHLY AVERAGE CALCULATIONS.

export function averageMaxTemperature(weatherData) {
  let sumMaxTemp = 0;
  let maxTemperatures = [];
  let averageMaxTemperature = 0;

  for (let data of weatherData) {
    data.forEach((value, key) => {
      if (key === "Max TemperatureC") {
        maxTemperatures.push(value);
      }
    });
  }

  for (let element of maxTemperatures) {
    sumMaxTemp = sumMaxTemp + Number(element);
  }

  averageMaxTemperature = sumMaxTemp / maxTemperatures.length;
  return averageMaxTemperature;
}

export function averageLowestTemperature(weatherData) {
  let sumMinTemp = 0;
  let minTemperatures = [];
  let averageMinTemperature = 0;

  for (let data of weatherData) {
    data.forEach((value, key) => {
      if (key === "Min TemperatureC") {
        minTemperatures.push(value);
      }
    });
  }

  for (let element of minTemperatures) {
    sumMinTemp = sumMinTemp + Number(element);
  }

  averageMinTemperature = sumMinTemp / minTemperatures.length;
  return averageMinTemperature;
}

export function averageMeanHumidity(weatherData) {
  let sumMeanHumidity = 0;
  let meanHumidities = [];
  let averageMeanHumidity = 0;

  for (let data of weatherData) {
    data.forEach((value, key) => {
      if (key === " Mean Humidity") {
        meanHumidities.push(value);
      }
    });
  }

  for (let element of meanHumidities) {
    sumMeanHumidity = sumMeanHumidity + Number(element);
  }
  averageMeanHumidity = sumMeanHumidity / meanHumidities.length;
  return averageMeanHumidity;
}
