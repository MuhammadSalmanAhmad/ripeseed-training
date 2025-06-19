import { getMonthName } from "./utilities/get-monthname.js";
import { ParseWeatherData } from "./parser.js";
import {
    ChartReportGenerator,
    MonthlyAverageReportGenerator,
} from "./reports/report-generator.js";
import { GetWeatherFilesByYear } from "./utilities/read-weatherdata-dir.js";
import { ParsingYearData } from "./year-based-parser.js";
import { YearExtremeValues } from "./utilities/extreme-values.js";

export async function main(argv) {
    const [, , reportType, monthAndYear] = argv;
    let weatherData;
    let yearBasedFiles;
    let yearWeatherReadings;

    //LOGIC FOR HANDLING MULTIPLE REPORTS
    //argv here are cli arguments i.e node weatherman.js -a  2004/6 -c 2005/6 -e 2011 here argv[2] is = -a and
    //argv[0],agrv[1] are  Node.js executable and the path and filename of the script.

    if (argv.length > 2) {
        for (let i = 2; i < argv.length; i++) {
            switch (argv[i]) {
                case "-a":
                    // Try to implement DRY principle here
                    if (argv[i + 1].includes("/")) {
                        weatherData = await GetWeatherData(argv[i + 1]);
                        MonthlyAverageReportGenerator(weatherData);
                    }
                    break
                case "-c":
                    if (argv[i + 1].includes("/")) {
                        weatherData = await GetWeatherData(argv[i + 1]);
                        ChartReportGenerator(weatherData);
                    }
                    break
                case "-e":
                    yearBasedFiles = await GetWeatherFilesByYear(argv[i + 1]);
                    yearWeatherReadings = await ParsingYearData(yearBasedFiles);
                    YearExtremeValues(yearWeatherReadings);
                    break
            }
        }
    }
}

async function GetWeatherData(argv) {
    let parts;
    let year;
    let month;
    let monthName;
    let fileName;

    parts = argv.split("/");
    year = parts[0];
    month = parts[1];
    monthName = getMonthName(Number(month));
    fileName = `Murree_weather_${year}_${monthName}.txt`;
    return await ParseWeatherData(fileName);
}
