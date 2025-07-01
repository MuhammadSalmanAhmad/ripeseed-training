import { getMonthName } from "./utils.js";
import { promises as fs } from "fs";

export const getWeatherFilesByYear = async (weatherDataPath, year) => {
  try {
    const files = await fs.readdir(weatherDataPath);
    return validateYearFiles(files.filter((file) => file.includes(year)),year);
  } catch (err) {
    console.error("Error reading directory:", err.toString());
    return "file not found";
  }
};

export const getWeatherFile = (argv) => {
  //making use of array destructring
  let [year, month] = argv.split("/");
  let monthName = getMonthName(month);
  let fileName = `Murree_weather_${year}_${monthName}.txt`;
  return fileName;
};

const validateYearFiles = (yearFiles, year) => {
  if (yearFiles.length === 0) {
    throw new Error(`No weather data files found for the year ${year}`);
  }
  return yearFiles
};


