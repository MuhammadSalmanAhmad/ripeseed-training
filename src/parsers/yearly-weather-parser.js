import { parseWeatherData } from "./parser.js"; 

export async function parseYearData(yearWeatherFiles) {
  const yearWeatherReadings = [];

  for (let file of yearWeatherFiles) {
    let reading = await parseWeatherData(file);
    yearWeatherReadings.push(reading);
  }
  return yearWeatherReadings
}

