import { getMonthName } from "../utilities/get-monthname.js";

export function extremeValuesReport(maxHumidity, maxTemp, minTemp) {
    let maxTempDate = maxHumidity["date"].split("-");
    let minTempDate = minTemp["date"].split("-");
    let humidityDate = maxHumidity["date"].split("-");
    
    console.log(
        ` Highest: ${maxTemp["maxtemp"]}C on ${getMonthName(
            Number(maxTempDate[1])
        )} ${maxTempDate[2]}`
    );
    console.log(
        ` Lowest: ${minTemp["minTemp"]}C on ${getMonthName(
            Number(minTempDate[1])
        )} ${minTempDate[2]}`
    );
    console.log(
        ` Humidity: ${maxHumidity["maxHumidity"]}% on ${getMonthName(
            Number(humidityDate[1])
        )} ${humidityDate[2]}`
    );
}
