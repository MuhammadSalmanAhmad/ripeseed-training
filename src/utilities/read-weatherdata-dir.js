import { promises as fs } from "fs";
import { weatherDataPath } from "./constants.js";

export async function getWeatherFilesByYear(year) {
  try {
    const files = await fs.readdir(weatherDataPath);
    const filteredWeatherFiles = files.filter((file) => file.includes(year));
    return filteredWeatherFiles;
  } catch (err) {
    console.error("Error reading directory:", err);
    return [];
  }
}
