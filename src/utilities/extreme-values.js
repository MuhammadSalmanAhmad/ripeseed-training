import { extremeValuesReport } from "../reports/extreme-values-report.js";
import {
    maxTempInYear as maxTempInYear,
    maxHumidDayInYear as maxHumidDayInYear,
    lowestTempInYear as lowestTempInYear,
} from "./extreme-calculation.js";

export function yearExtremeValues(yearWeatherReading) {
    const maxTemperatures = [];
    const lowestTemperatures = [];
    const maxHumidityValues = [];
    let maxTemp;
    let minTemp;
    let maxHumidity;

    for (let monthReading of yearWeatherReading) {
        for (let dayReading of monthReading) {
            let maxTemp = new Map();
            maxTemp.set("Date", dayReading.get("PKT"));
            maxTemp.set("Temperature", dayReading.get("Max TemperatureC"));
            maxTemperatures.push(maxTemp);
            let lowestTemp = new Map();
            lowestTemp.set("Date", dayReading.get("PKT"));
            lowestTemp.set("Temperature", dayReading.get("Min TemperatureC"));
            lowestTemperatures.push(lowestTemp);
            let maxHumidity = new Map();
            maxHumidity.set("Date", dayReading.get("PKT"));
            maxHumidity.set("Humidity", dayReading.get("Max Humidity"));
            maxHumidityValues.push(maxHumidity);
        }
    }
    maxHumidity = maxHumidDayInYear(maxHumidityValues);
    minTemp = lowestTempInYear(lowestTemperatures);
    maxTemp = maxTempInYear(maxTemperatures);
    extremeValuesReport(maxHumidity, maxTemp, minTemp);
}
