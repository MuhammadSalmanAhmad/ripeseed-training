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
    ` Highest: ${maxTemp["Max TemperatureC"]}C on ${getMonthName(
      maxTemp.PKST || maxTemp.PKT
    )} ${getDayOfMonth(maxTemp.PKST || maxTemp.PKT)}`
  );

  console.log(
    ` Lowest: ${minTemp["Min TemperatureC"]}C on ${getMonthName(
      minTemp.PKST || minTemp.PKT
    )} ${getDayOfMonth(minTemp.PKST || minTemp.PKT)}`
  );

  console.log(
    ` Humidity: ${maxHumidity["Max Humidity"]}% on ${getMonthName(
      maxHumidity.PKST || maxHumidity.PKT
    )} ${getDayOfMonth(maxHumidity.PKST || maxHumidity.PKT)} `
  );
};
