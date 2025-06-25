import {
  extremeValuesReport,
  monthlyAverageReportGenerator,
  printDailyTemperatureExtremes,
} from "./services/report-generator-service.js";
import {
  getWeatherFilesByYear,
  getWeatherData,
} from "./services/weather-data-reader-service.js";
import { parseYearData } from "./services/parser-service.js";

export async function main(args) {
    console.log(args)
  for (let key in args) {
    switch (key) {
      case "a": {
        let weatherData = await getWeatherData(args.a);
        monthlyAverageReportGenerator(weatherData);
        break;
      }
      case "c": {
        let weatherData = await getWeatherData(args.c);
        printDailyTemperatureExtremes(weatherData, args.c);
        break;
      }
      case "e": {
        let yearBasedFiles = await getWeatherFilesByYear(args.e);
        let yearWeatherReadings = await parseYearData(yearBasedFiles);
        extremeValuesReport(yearWeatherReadings);
        break;
      }
    }
  }
}
