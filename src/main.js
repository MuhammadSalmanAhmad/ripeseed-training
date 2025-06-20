import { getMonthName } from "./utilities/get-monthname.js";
import { parseWeatherData } from "./parser.js";
import {
    chartReportGenerator,
    monthlyAverageReportGenerator,
} from "./reports/report-generator.js";
import { getWeatherFilesByYear } from "./utilities/read-weatherdata-dir.js";
import { parsingYearData } from "./year-based-parser.js";
import { yearExtremeValues } from "./utilities/extreme-values.js";

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
                        weatherData = await getWeatherData(argv[i + 1]);
                        monthlyAverageReportGenerator(weatherData);
                    }
                    break
                case "-c":
                    if (argv[i + 1].includes("/")) {
                        weatherData = await getWeatherData(argv[i + 1]);
                        chartReportGenerator(weatherData);
                    }
                    break
                case "-e":
                    yearBasedFiles = await getWeatherFilesByYear(argv[i + 1]);
                    yearWeatherReadings = await parsingYearData(yearBasedFiles);
                    yearExtremeValues(yearWeatherReadings);
                    break
            }
        }
    }
}

async function getWeatherData(argv) {
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
    return await parseWeatherData(fileName);
}
