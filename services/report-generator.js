import { getMonthName, getDayOfMonth } from "./utilities.js";

export function monthlyAverageReportGenerator(
  avgMaxTemp,
  avgLowestTemp,
  avgMeanHumidity
) {
  console.log(`Highest Average : ${avgMaxTemp} C `);
  console.log(`Lowest Average : ${avgLowestTemp} C`);
  console.log(`Average Mean Humidity : ${avgMeanHumidity} %`);
}

export function chartReportGenerator(highestAverageTemp, lowestAverageTemp) {
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

export function printDailyTemperatureExtremes(
  maxTemps,
  minTemps,
  monthAndYear
) {
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

export function extremeValuesReport([maxHumidity, maxTemp, minTemp]) {

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
