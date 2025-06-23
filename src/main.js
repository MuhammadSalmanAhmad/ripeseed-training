import {
    monthlyAverageReportGenerator,
    printDailyTemperatureExtremes,
} from "./reports/report-generator.js";
import { getWeatherFilesByYear } from "./utilities/read-weatherdata-dir.js";
import { parseYearData } from "./parsers/yearly-weather-parser.js";
import { yearExtremeValues } from "./utilities/get-extreme-values.js";
import { getWeatherData } from "./utilities/get-weather-data.js";
import yargsParser from "yargs-parser";

export async function main() {
    // eslint-disable-next-line no-undef
    const args = yargsParser(process.argv.slice(2));
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
                //chartReportGenerator(weatherData);
                printDailyTemperatureExtremes(weatherData, args.c)
                break
            case "e":
                yearBasedFiles = await getWeatherFilesByYear(args.e);
                yearWeatherReadings = await parseYearData(yearBasedFiles);
                yearExtremeValues(yearWeatherReadings);
                break
        }
    }
}

