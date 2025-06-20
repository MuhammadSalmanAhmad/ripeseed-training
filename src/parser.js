import fs from "fs/promises"; 

const weatherReadings = [];

export async function parseWeatherData(fileName) {
  let path= `data/weatherfiles/${fileName}`
  try {
    const data = await fs.readFile(path, "utf8");
    const lines = data.split("\n");
    
    if (lines.length === 0) return weatherReadings;
    
    let keys = lines[0].split(",");
    
    for (let lineNumber = 1; lineNumber < lines.length; lineNumber++) {
     
      if (lines[lineNumber].trim() === "") continue;
      
      let values = lines[lineNumber].split(",");
      
      const weatherData = new Map();
      for (let index = 0; index < keys.length; index++) {
        weatherData.set(keys[index], values[index]);
      }
      weatherReadings.push(weatherData);
    }
    
    return weatherReadings;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}

//let data = await parseWeatherData();
//console.log(data);
//console.log(`Parsed ${data.length} weather records`);
