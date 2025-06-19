import { ParseWeatherData } from "./parser.js";

export async function ParsingYearData(yearWeatherFiles) {
  const yearWeatherReadings = [];

  for (let file of yearWeatherFiles) {
    let reading = await ParseWeatherData(file);
    yearWeatherReadings.push(reading);
  }
  return yearWeatherReadings
}

