import {
  calculateAverage,
  extractValuesByKey,
  filterYearlyRecord,
} from "./utils.js";

//METHOD TO PERFORM CALCULATION FOR EXTREME-VALUE REPORT
export const yearExtremeCalculator = (yearWeatherReading) => {
  return [
    filterYearlyRecord(yearWeatherReading.flat(), "Max TemperatureC", true),
    filterYearlyRecord(yearWeatherReading.flat(), "Min TemperatureC", false),
    filterYearlyRecord(yearWeatherReading.flat(), "Max Humidity", true),
  ];
};

//METHOD FOR MONTHLY CHART REPORT CALCULATION
export const chartReportCalculator = (weatherData) => {
  return [
    extractValuesByKey("Max TemperatureC", weatherData),
    extractValuesByKey("Min TemperatureC", weatherData),
  ];
};

//METHOD FOR MONTHLY AVERAGE CALCULATIONS.
export const avgRecordCalulator = (weatherData) => {
  return {
    avgMaxTemp: calculateAverage("Max TemperatureC", weatherData),
    avgMinTemp: calculateAverage("Min TemperatureC", weatherData),
    avgMeanHumidity: calculateAverage("Mean Humidity", weatherData),
  };
};
