export function maxTemperatures(weatherData) {
    let maxTemperatures = [];
    
    for (let i = 0; i < weatherData.length; i++) {
        weatherData[i].forEach((value, key) => {
            if (key === "Max TemperatureC") {
                maxTemperatures.push(value);
            }
        });
    }
}

export function minTemperatures(weatherData) {
   
    let minTemperatures = [];
   
    for (let i = 0; i < weatherData.length; i++) {
        weatherData[i].forEach((value, key) => {
            if (key === "Min TemperatureC") {
                minTemperatures.push(value);
            }
        });
    }
    return minTemperatures;
}
