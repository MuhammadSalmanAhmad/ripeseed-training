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
  averageMaxTemperature,
  averageLowestTemperature,
  averageMeanHumidity,
  maxTemperatures,
  minTemperatures,
  yearExtremeValues,
} from "./services/calculations.js";

export async function main(args) {
    
  for (let key in args) {
    switch (key) {
      case "a": {
        let fileName = getWeatherFile(args.a);
        let weatherData = await fileParser(fileName);
        let [avgMaxTemp, avgLowestTemp, avgMeanHumidity] = [
          averageMaxTemperature(weatherData),
          averageLowestTemperature(weatherData),
          averageMeanHumidity(weatherData),
        ];
        monthlyAverageReportGenerator(
          avgMaxTemp,
          avgLowestTemp,
          avgMeanHumidity
        );

        break;
      }
      case "c": {
        let fileName = getWeatherFile(args.c);
        let weatherData = await fileParser(fileName);
        let [maxTemps, minTemps] = [
          maxTemperatures(weatherData),
          minTemperatures(weatherData),
        ];
        printDailyTemperatureExtremes(maxTemps, minTemps, args.c);
        break;
      }
      case "e": {
        let yearBasedFiles = await getWeatherFilesByYear(args.e);
        let yearWeatherReadings = await parseYearData(yearBasedFiles);
        let [maxHumidity, maxTemp, minTemp] =
          yearExtremeValues(yearWeatherReadings);
        extremeValuesReport(maxHumidity, maxTemp, minTemp);
        break;
      }
    }
  }
}

// eslint-disable-next-line no-undef
const args = Yargs(process.argv.slice(2));
await main(args);
