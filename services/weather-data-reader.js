import { getMonthName } from "./utilities.js";
import { promises as fs } from "fs";

export async function getWeatherFilesByYear(weatherDataPath,year) {
  try {
    const files = await fs.readdir(weatherDataPath);
    const filteredWeatherFiles = files.filter((file) => file.includes(year));
    return filteredWeatherFiles;

  } catch (err) {
    console.error("Error reading directory:", err.toString());
    return [];
  }
}

export  function getWeatherFile(argv) {
  //making use of array destructring
  let [year, month] = argv.split("/");
  let monthName = getMonthName(month);
  let fileName = `Murree_weather_${year}_${monthName}.txt`;
  return  fileName
}
