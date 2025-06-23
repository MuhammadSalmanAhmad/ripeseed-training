export function maxTemperatures(weatherData) {
    let maxTemperatures = [];
    
    for (let data of weatherData) {
        data.forEach((value, key) => {
            if (key === "Max TemperatureC") {
                maxTemperatures.push(value);
            }
        });
    }
    return maxTemperatures
}

export function minTemperatures(weatherData) {
   
    let minTemperatures = [];
   
    for (let data of weatherData) {
        data.forEach((value, key) => {
            if (key === "Min TemperatureC") {
                minTemperatures.push(value);
            }
        });
    }
    return minTemperatures;
}
