import fs from "fs/promises";


export async function parseWeatherData(fileName) {
  let path = `data/weatherfiles/${fileName}`;
  const weatherReadings = [];

  try {
    const data = await fs.readFile(path, "utf8");
    const lines = data.split("\n");
    if (lines.length === 0) return weatherReadings;
    let keys = lines[0].split(",");
    for (const line of lines.slice(1)) {
      if (line.trim() === "") continue;

      const values = line.split(",");
      const weatherData = new Map();
      for (let key of keys) {
        weatherData.set(key, values[keys.indexOf(key)])
      }
      weatherReadings.push(weatherData)
    }
    return weatherReadings;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}

