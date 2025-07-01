import fs from "fs/promises";
import { REQUIRED_FIELDS } from "../constants.js";

export const fileParser = async (dirPath, fileName) => {
  let path = `${dirPath}/${fileName}`;

  try {
    const rawData = await fs.readFile(path, "utf8");
    return validateData(parseCSVData(rawData));
  } catch (err) {
    console.error("Error reading file:", err.toString());
    throw err;
  }
};
//forEach does not wait for async calls hence going with for..of loop although we can use promises
export const parseYearData = async (dirPath, yearWeatherFiles) => {
  const yearWeatherReadings = [];
  for (let file of yearWeatherFiles) {
    let reading = await fileParser(dirPath, file);
    yearWeatherReadings.push(reading);
  }
  return yearWeatherReadings;
};

//function responsible only for parsing and structring data
const parseCSVData = (data) => {
  const parsedData = [];
  const lines = data.split("\n");

  if (lines.length === 0) return [];
  let keys = lines[0].split(",");

  lines.slice(1).forEach((line) => {
    if (line.trim() === "") return;
    const values = line.split(",");
    const weatherData = {};

    keys.forEach((key, index) => {
      key = key.trim();
      if (REQUIRED_FIELDS.includes(key)) {
        weatherData[key] = values[index];
      }
    });
    
    parsedData.push(weatherData);
  });

  return parsedData;
};

const validateRecords = (item) => {
  return REQUIRED_FIELDS.every((field) => item[field] !== "");
};

const validateData = (weatherData) => {
  return weatherData.filter(validateRecords);
};
