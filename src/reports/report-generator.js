import { maxTemperatures, minTemperatures } from "../utilities/chart-report-calculation.js";
import {
    averageLowestTemperature,
    averageMaxTemperature,
    averageMeanHumidity,
} from "../utilities/monthly-average.js";

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

export function printDailyTemperatureExtremes(weatherData) {
    let maxTemps = maxTemperatures(weatherData)
    let minTemps = minTemperatures(weatherData)

    for (let value of maxTemps) {
        console.log(
            "\x1b[31m" +
            "*".repeat(value) +
            " " +
            `${value} C` +
            "\x1b[0m"
        );
    }

    for (let value of minTemps) {
        console.log(
            "\x1b[34m" +
            "*".repeat(value) +
            " " +
            `${value} C` +
            "\x1b[0m"
        );
    }


}
