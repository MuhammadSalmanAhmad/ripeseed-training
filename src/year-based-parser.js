import { parseWeatherData } from "./parser.js";

export async function parsingYearData(yearWeatherFiles) {
  const yearWeatherReadings = [];

  for (let file of yearWeatherFiles) {
    let reading = await parseWeatherData(file);
    yearWeatherReadings.push(reading);
  }
  return yearWeatherReadings
}

