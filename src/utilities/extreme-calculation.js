//METHODS TO PERFORM CALCULATION FOR EXTREME-VALUE REPORT BEING CALLED IN extreme-value.js

export function MaxTempInYear(maxTemperatures) {
    let maxtemp = -Infinity;
    let date;
    
    for (let data of maxTemperatures) {
        if (Number(data.get("Temperature")) > maxtemp) {
            maxtemp = Number(data.get("Temperature"));
        }
    }

    for (let temperatures of maxTemperatures) {
        if (Number(temperatures.get("Temperature")) === maxtemp) {
            date = temperatures.get("Date");
        }
    }

    return { date, maxtemp };
}

export function LowestTempInYear(lowestTemperatures) {
    let minTemp = +Infinity;
    let date;

    for (let data of lowestTemperatures) {
        if (
            (Number(data.get("Temperature")) !== 0) &
            (Number(data.get("Temperature")) < minTemp)
        ) {
            minTemp = Number(data.get("Temperature"));
        }
    }
    for (let temperatures of lowestTemperatures) {
        if (Number(temperatures.get("Temperature")) === minTemp) {
            date = temperatures.get("Date");
        }
    }

    return { date, minTemp };
}

export function MaxHumidDayInYear(maxHumidityValues) {
    let maxHumidity = -Infinity;
    let date;

    for (let data of maxHumidityValues) {
        if (Number(data.get("Humidity")) > maxHumidity) {
            maxHumidity = Number(data.get("Humidity"));
        }
    }
    for (let humidities of maxHumidityValues) {
        if (Number(humidities.get("Humidity")) === maxHumidity) {
            date = humidities.get("Date");
        }
    }

    return { date, maxHumidity };
}
