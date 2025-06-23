import { getMonthName } from "./get-monthname.js";
import { parseWeatherData } from "../parsers/parser.js";

export async function getWeatherData(argv) {
    //making use of array destructring 
    let monthName
    let fileName;
    let [year,month]= argv.split("/");
    
    monthName = getMonthName(Number(month));
    fileName = `Murree_weather_${year}_${monthName}.txt`;
    return await parseWeatherData(fileName);
}