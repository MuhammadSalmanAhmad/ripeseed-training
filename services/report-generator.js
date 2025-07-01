import { getMonthName, getDayOfMonth } from "./utils.js";

export const generateAvgReport = ({
  avgMaxTemp,
  avgMinTemp,
  avgMeanHumidity,
}) => {
  console.log(`Highest Average : ${avgMaxTemp} C `);
  console.log(`Lowest Average : ${avgMinTemp} C`);
  console.log(`Average Mean Humidity : ${avgMeanHumidity} %`);
};

export const generateChartReport = ([maxTemps, minTemps], monthAndYear) => {
  let [year, month] = monthAndYear.split("/");
  console.log(`${getMonthName(month)} ${year}`);

  maxTemps.forEach((value) =>
    console.log(
      "\x1b[31m" + "*".repeat(Math.abs(value)) + " " + `${value} C` + "\x1b[0m"
    )
  );

  minTemps.forEach((value) =>
    // eslint-disable-next-line no-undef
    console.log(
      "\x1b[34m" + "*".repeat(Math.abs(value)) + " " + `${value} C` + "\x1b[0m"
    )
  );
};

export const generateExtremeReport = ([maxTemp, minTemp, maxHumidity]) => {
  console.log(
    ` Highest: ${maxTemp.value}C on ${getMonthName(
      maxTemp.Date
    )} ${getDayOfMonth(maxTemp.Date)}`
  );

  console.log(
    ` Lowest: ${minTemp.value}C on ${getMonthName(
      minTemp.Date
    )} ${getDayOfMonth(minTemp.Date)}`
  );

  console.log(
    ` Humidity: ${maxHumidity.value}% on ${getMonthName(
      maxHumidity.Date
    )} ${getDayOfMonth(maxHumidity.Date)} `
  );
};
