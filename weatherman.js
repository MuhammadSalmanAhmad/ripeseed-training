import Yargs from "yargs-parser";
import {
  extremeValuesReport,
  monthlyAverageReportGenerator,
  printDailyTemperatureExtremes,
} from "./services/report-generator.js";
import {
  getWeatherFilesByYear,
  getWeatherFile,
} from "./services/weather-data-reader.js";
import { fileParser, parseYearData } from "./services/parser.js";
import {
  maxTemperatures,
  minTemperatures,
  yearExtremeValues,
} from "./services/calculations.js";
import { getWeatherRecords } from "./services/utilities.js";

export async function main(args) {
  for (let key in args) {
    switch (key) {
      case "a": {
        let fileName = getWeatherFile(args.a);
        let weatherData = await fileParser(args._[0], fileName);
        monthlyAverageReportGenerator(getWeatherRecords(weatherData));
        break;
      }
      case "c": {
        let fileName = getWeatherFile(args.c);
        let weatherData = await fileParser(args._[0], fileName);
        printDailyTemperatureExtremes(
          maxTemperatures(weatherData),
          minTemperatures(weatherData),
          args.c
        );
        break;
      }
      case "e": {
        let yearBasedFiles = await getWeatherFilesByYear(args._[0], args.e);
        let yearWeatherReadings = await parseYearData(
          args._[0],
          yearBasedFiles
        );
        extremeValuesReport(yearExtremeValues(yearWeatherReadings));
        break;
      }
    }
  }
}
// eslint-disable-next-line no-undef
const args = Yargs(process.argv.slice(2));
await main(args);
