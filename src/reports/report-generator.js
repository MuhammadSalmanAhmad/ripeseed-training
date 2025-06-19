import {
    AverageLowestTemperature,
    AverageMaxTemperature,
    AverageMeanHumidity,
} from "../utilities/monthly-average.js";

export function MonthlyAverageReportGenerator(weatherData) {
    console.log(`Highest Average : ${AverageMaxTemperature(weatherData)} C `);
    console.log(`Lowest Average : ${AverageLowestTemperature(weatherData)} C`);
    console.log(`Average Mean Humidity : ${AverageMeanHumidity(weatherData)} %`);
}

export function ChartReportGenerator(weatherData) {
    let highestAverageTemp = AverageMaxTemperature(weatherData);
    let lowestAverageTemp = AverageLowestTemperature(weatherData);
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

