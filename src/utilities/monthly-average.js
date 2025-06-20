export function averageMaxTemperature(weatherData) {
    let sumMaxTemp = 0;
    let maxTemperatures = [];
    let averageMaxTemperature = 0;

    for (let i = 0; i < weatherData.length; i++) {
        weatherData[i].forEach((value, key) => {
            if (key === "Max TemperatureC") {
                maxTemperatures.push(value);
            }
        });
    }

    for (let element of maxTemperatures) {
        sumMaxTemp = sumMaxTemp + Number(element);
    }

    averageMaxTemperature = sumMaxTemp / maxTemperatures.length;
    return averageMaxTemperature;
}

export function averageLowestTemperature(weatherData) {
    let sumMinTemp = 0;
    let minTemperatures = [];
    let averageMinTemperature = 0;

    for (let i = 0; i < weatherData.length; i++) {
        weatherData[i].forEach((value, key) => {
            if (key === "Min TemperatureC") {
                minTemperatures.push(value);
            }
        });
    }

    for (let element of minTemperatures) {
        sumMinTemp = sumMinTemp + Number(element);
    }

    averageMinTemperature = sumMinTemp / minTemperatures.length;
    return averageMinTemperature;
}

export function averageMeanHumidity(weatherData) {
    let sumMeanHumidity = 0;
    let meanHumidities = [];
    let averageMeanHumidity = 0;

    for (let i = 0; i < weatherData.length; i++) {
        weatherData[i].forEach((value, key) => {
            if (key === " Mean Humidity") {
                meanHumidities.push(value);
            }
        });
    }

    for (let element of meanHumidities) {
        sumMeanHumidity = sumMeanHumidity + Number(element);
    }
    averageMeanHumidity = sumMeanHumidity / meanHumidities.length;
    return averageMeanHumidity;
}
