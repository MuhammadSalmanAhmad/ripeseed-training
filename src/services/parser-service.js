import fs from "fs/promises";

export async function fileParser(fileName) {
  let path = `data/weatherfiles/${fileName}`;

  try {
    const data = await fs.readFile(path, "utf8");
    let weatherReadings = parseCSVData(data);
    let validatedData = validateData(weatherReadings);
    return validatedData;
  } catch (err) {
    console.error("Error reading file:", err.toString());
    throw err;
  }
}

export async function parseYearData(yearWeatherFiles) {
  const yearWeatherReadings = [];
  for (let file of yearWeatherFiles) {
    let reading = await fileParser(file);
    yearWeatherReadings.push(reading);
  }
  return yearWeatherReadings;
}

//function responsible only for parsing and structring data
export function parseCSVData(data) {
  const parsedData = [];
  const lines = data.split("\n");

  if (lines.length === 0) return [];
  let keys = lines[0].split(",");
  for (const line of lines.slice(1)) {
    if (line.trim() === "") continue;

    const values = line.split(",");
    const weatherData = new Map();
    keys.forEach((key, index) => {
      weatherData.set(key.trim(), values[index]);
    });
    parsedData.push(weatherData);
  }
  return parsedData;
}

//function for validating structured data
export function validateData(weatherData) {
  //data structure for validated data is array of map objects
  let validatedData = [];
  for (let item of weatherData) {
    if (
      item.get("Max TemperatureC") ||
      item.get("Min TemperatureC") ||
      item.get("Mean Humidity") !== ""
    ) {
      validatedData.push(item);
    }
  }

  return validatedData;
}
