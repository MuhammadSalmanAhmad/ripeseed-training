import {
  maxTemperatures,
  minTemperatures,
  averageLowestTemperature,
  averageMaxTemperature,
  averageMeanHumidity,
  yearExtremeValues,
} from "./calculation-service.js";
import { getMonthName, getDayOfMonth } from "../utilities/get-month-details.js";

export function monthlyAverageReportGenerator(weatherData) {
  console.log(`Highest Average : ${averageMaxTemperature(weatherData)} C `);
  console.log(`Lowest Average : ${averageLowestTemperature(weatherData)} C`);
  console.log(`Average Mean Humidity : ${averageMeanHumidity(weatherData)} %`);
}

export function chartReportGenerator(weatherData) {
  let highestAverageTemp = averageMaxTemperature(weatherData);
  let lowestAverageTemp = averageLowestTemperature(weatherData);
  console.log(
    "\x1b[31m" +
      "*".repeat(highestAverageTemp) +
      " " +
      `${highestAverageTemp} C` +
      "\x1b[0m"
  );
  console.log(
    "\x1b[34m" +
      "*".repeat(lowestAverageTemp) +
      " " +
      `${lowestAverageTemp} C` +
      "\x1b[0m"
  );
}

export function printDailyTemperatureExtremes(weatherData, monthAndYear) {
  let maxTemps = maxTemperatures(weatherData);
  let minTemps = minTemperatures(weatherData);
  let [year, month] = monthAndYear.split("/");

  console.log(`${getMonthName(month)} ${year}`);

  for (let value of maxTemps) {
    console.log(
      "\x1b[31m" + "*".repeat(value) + " " + `${value} C` + "\x1b[0m"
    );
  }

  for (let value of minTemps) {
    console.log(
      "\x1b[34m" + "*".repeat(value) + " " + `${value} C` + "\x1b[0m"
    );
  }
}

export function extremeValuesReport(yearWeatherReadings) {
  let [maxHumidity, maxTemp, minTemp] = yearExtremeValues(yearWeatherReadings);

  console.log(
    ` Highest: ${maxTemp["maxtemp"]}C on ${getMonthName(
      maxTemp["date"]
    )} ${getDayOfMonth(maxTemp["date"])}`
  );

  console.log(
    ` Lowest: ${minTemp["minTemp"]}C on ${getMonthName(
      minTemp["date"]
    )} ${getDayOfMonth(minTemp["date"])}`
  );

  console.log(
    ` Humidity: ${maxHumidity["maxHumidity"]}% on ${getMonthName(
      maxTemp["date"]
    )} ${getDayOfMonth(maxHumidity["date"])} `
  );
}
