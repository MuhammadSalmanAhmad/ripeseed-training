import { getMonthName, getDayOfMonth } from "./utils.js";

export function generateAvgReport({ avgMaxTemp, avgMinTemp, avgMeanHumidity }) {
  console.log(`Highest Average : ${avgMaxTemp} C `);
  console.log(`Lowest Average : ${avgMinTemp} C`);
  console.log(`Average Mean Humidity : ${avgMeanHumidity} %`);
}

export function generateChartReport([maxTemps, minTemps], monthAndYear) {
  let [year, month] = monthAndYear.split("/");
  console.log(`${getMonthName(month)} ${year}`);

  maxTemps.forEach((value) =>
    console.log("\x1b[31m" + "*".repeat(Math.abs(value)) + " " + `${value} C` + "\x1b[0m")
  );

  minTemps.forEach((value) =>
    // eslint-disable-next-line no-undef
    console.log("\x1b[34m" + "*".repeat(Math.abs(value)) + " " + `${value} C` + "\x1b[0m")
  );
}

export function generateExtremeReport([maxHumidity, maxTemp, minTemp]) {
  
  console.log(
    ` Highest: ${maxTemp.maxtemp}C on ${getMonthName(
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
      maxHumidity["date"]
    )} ${getDayOfMonth(maxHumidity["date"])} `
  );
}
