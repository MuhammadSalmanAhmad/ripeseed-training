import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  generateExtremeReport,
  generateAvgReport,
  generateChartReport,
} from "./services/report-generator.js";
import {
  getWeatherFilesByYear,
  getWeatherFile,
} from "./services/weather-data-reader.js";
import { fileParser, parseYearData } from "./services/parser.js";
import {
  avgRecordCalulator,
  chartReportCalculator,
  yearExtremeCalculator,
} from "./services/calculations.js";

export async function main(args) {
  let dirPath = args._[0]
  if (args.average) {
    const fileName = getWeatherFile(args.average);
    const weatherData = await fileParser(dirPath, fileName);
    generateAvgReport(avgRecordCalulator(weatherData));
  }

  if (args.compare) {
    const fileName = getWeatherFile(args.compare);
    const weatherData = await fileParser(dirPath, fileName);
    generateChartReport(chartReportCalculator(weatherData),args.compare);
  }

  if (args.extreme) {
    const yearBasedFiles = await getWeatherFilesByYear(dirPath, args.extreme);
    const yearWeatherReadings = await parseYearData(dirPath, yearBasedFiles);
    generateExtremeReport(yearExtremeCalculator(yearWeatherReadings))
  }
}
// eslint-disable-next-line no-undef
const args = yargs(hideBin(process.argv))
  .option("average", {
    alias: "a",
    type: "string",
    describe: "Get average temperature of a specific month",
  })
  .option("compare", {
    alias: "c",
    type: "string",
    describe: "Compare daily temperature extremes of a month",
  })
  .option("extreme", {
    alias: "e",
    type: "string",
    describe: "Get yearly extreme temperature data",
  })
  .parse()

await main(args);
