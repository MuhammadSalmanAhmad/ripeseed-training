//METHODS TO PERFORM CALCULATION FOR EXTREME-VALUE REPORT BEING CALLED IN get-extereme-values.js

export function maxTempInYear(maxTemperatures) {
  let maxtemp = -Infinity;
  let date;

  for (let data of maxTemperatures) {
    if (Number(data.get("Temperature")) > maxtemp) {
      maxtemp = Number(data.get("Temperature"));
    }
  }

  for (let temperatures of maxTemperatures) {
    if (Number(temperatures.get("Temperature")) === maxtemp) {
      date = temperatures.get("Date");
    }
  }

  return { date, maxtemp };
}

export function lowestTempInYear(lowestTemperatures) {
  let minTemp = +Infinity;
  let date;

  for (let data of lowestTemperatures) {
    if (
      (Number(data.get("Temperature")) !== 0) &
      (Number(data.get("Temperature")) < minTemp)
    ) {
      minTemp = Number(data.get("Temperature"));
    }
  }

  for (let temperatures of lowestTemperatures) {
    if (Number(temperatures.get("Temperature")) === minTemp) {
      date = temperatures.get("Date");
    }
  }

  return { date, minTemp };
}

export function maxHumidDayInYear(maxHumidityValues) {
  let maxHumidity = -Infinity;
  let date;

  for (let data of maxHumidityValues) {
    const humidity = Number(data.get("Humidity"));
    if (humidity > maxHumidity) maxHumidity = humidity;
  }

  for (let humidities of maxHumidityValues) {
    if (Number(humidities.get("Humidity")) === maxHumidity)
      date = humidities.get("Date");
  }

  return { date, maxHumidity };
}
