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
  let validatedData = [];
  for (let item of weatherData) {
    const maxTemp = item.get("Max TemperatureC");
    const minTemp = item.get("Min TemperatureC");
    const meanHumidity = item.get("Mean Humidity");

    if (
      maxTemp !== undefined && maxTemp !== null && maxTemp !== "" &&
      minTemp !== undefined && minTemp !== null && minTemp !== "" &&
      meanHumidity !== undefined && meanHumidity !== null && meanHumidity !== ""
    ) {
      validatedData.push(item);
    }
  }
  console.log(validatedData, validatedData.length)
  return validatedData;
}
