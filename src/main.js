import {
    extremeValuesReport,
    monthlyAverageReportGenerator,
    printDailyTemperatureExtremes,
} from "./reports/report-generator.js";
import { getWeatherFilesByYear,getWeatherData, } from "./data/weather-data-reader.js";
import { parseYearData} from "./parsers/parser.js";
import Yargs from "yargs-parser";

export async function main() {
    // eslint-disable-next-line no-undef
    const args = Yargs(process.argv.slice(2));
    let weatherData;
    let yearBasedFiles;
    let yearWeatherReadings;

    for (let key in args) {
        switch (key) {
            case "a":
                weatherData = await getWeatherData(args.a);
                monthlyAverageReportGenerator(weatherData);
                break
            case "c":
                weatherData = await getWeatherData(args.c);
                printDailyTemperatureExtremes(weatherData, args.c)
                break
            case "e":
                yearBasedFiles = await getWeatherFilesByYear(args.e);
                yearWeatherReadings = await parseYearData(yearBasedFiles);
                extremeValuesReport(yearWeatherReadings)
                break
        }
    }
}

