import {
  AverageLowestTemperature,
  AverageMaxTemperature,
  AverageMeanHumidity,
} from "../utilities/monthly-average.js";

export function MonthlyAverageReportGenerator() {
  console.log(`Highest Average : ${AverageMaxTemperature()} C `);
  console.log(`Lowest Average : ${AverageLowestTemperature()} C`);
  console.log(`Average Mean Humidity : ${AverageMeanHumidity()} %`);
}

MonthlyAverageReportGenerator();

export function ChartReportGenerator(){
    let highestAverageTemp = AverageMaxTemperature()
    let lowestAverageTemp = AverageLowestTemperature()
    console.log('\x1b[31m' + '*'.repeat(highestAverageTemp) + " " + `${highestAverageTemp} C` + '\x1b[0m');
    console.log('\x1b[34m' + '*'.repeat(lowestAverageTemp) + " " + `${lowestAverageTemp} C` + '\x1b[0m');
}

ChartReportGenerator()