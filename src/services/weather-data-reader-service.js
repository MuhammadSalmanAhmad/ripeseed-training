import { getMonthName } from "../utilities/get-month-details.js";
import { fileParser } from "./parser-service.js";
import { promises as fs } from "fs";
import { weatherDataPath } from "../utilities/constants.js";

export async function getWeatherFilesByYear(year) {
  try {
    const files = await fs.readdir(weatherDataPath);
    const filteredWeatherFiles = files.filter((file) => file.includes(year));
    return filteredWeatherFiles;
  } catch (err) {
    console.error("Error reading directory:", err.toString());
    return [];
  }
}

export async function getWeatherData(argv) {
  //making use of array destructring
  let [year, month] = argv.split("/");
  let monthName = getMonthName(month);
  let fileName = `Murree_weather_${year}_${monthName}.txt`;
  return await fileParser(fileName);
}
