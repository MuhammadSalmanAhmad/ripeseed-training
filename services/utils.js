
import { statSync } from 'fs';
/* eslint-disable no-unused-vars */
export const getMonthName = (value) => {
  const date = new Date(value);
  const monthName = date.toLocaleString("default", { month: "short" });
  return monthName;
};

export const getDayOfMonth = (value) => {
  const date = new Date(value);
  const dayOfMonth = date.getDate();
  return dayOfMonth;
};

export const isValidDate = (date) => {
  if (!date) throw new Error("argument is required.");
  const parsedDate = Date.parse(date.toString().replace("/", "-"));

  if (isNaN(parsedDate)) {
    throw new Error("Date is not valid");
  } else {
    return new Date(parsedDate);
  }
};

export const validateDirPath = (dirPath) => {
  if (!dirPath) throw new Error('Directory path is required.');

  try {
    const stats = statSync(dirPath); 
    if (!stats.isDirectory()) {
      throw new Error(`Path exists but is not a directory: ${dirPath}`);
    }
    return dirPath;
  } catch (err) {
    throw new Error(`Invalid directory path: ${dirPath}`);
  }
};

//UTILS RELATED TO CALCUALTION.JS
export const calculateAverage = (keyType, weatherData) => {
  return (
    weatherData.reduce((sum, item) => {
      return sum + Number(item[keyType]);
    }, 0) / weatherData.length
  );
};

export const extractValuesByKey = (keyType, weatherData) => {
  let tempArray = [];

  weatherData.forEach((data) => {
    Object.keys(data).forEach((key) => {
      if (key === keyType) {
        tempArray.push(data[key]);
      }
    });
  });
  return tempArray;
};

export const filterYearlyRecord = (yearWeatherData, keyType, isMax) => {
  if (isMax) {
    return yearWeatherData.reduce((maxItem, currItem) => {
      return Number(currItem[keyType]) > Number(maxItem[keyType])
        ? currItem
        : maxItem;
    });
  }
  return yearWeatherData.reduce((minItem, currItem) => {
    return Number(currItem[keyType]) < Number(minItem[keyType])
      ? currItem
      : minItem;
  });
};
