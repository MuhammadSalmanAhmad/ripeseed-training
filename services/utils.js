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

//UTILS RELATED TO CALCUALTION.JS
export const calculateAverage = (keyType, weatherData) => {
  return (
    weatherData.reduce((sum, item) => {
      return sum + Number(item.get(keyType));
    }, 0) / weatherData.length
  );
};

export const extractValuesByKey = (keyType, weatherData) => {
  let tempArray = [];
  weatherData.forEach((data) => {
    data.forEach((value, key) => {
      if (key === keyType) {
        tempArray.push(value);
      }
    });
  });
  return tempArray;
};

export const filterYearlyRecord = (yearWeatherData, keyType, isMax) => {
  const values = yearWeatherData.reduce((acc, item) => {
    return acc.concat({
      Date: item.get("PKT") || item.get("PKST"),
      value: Number(item.get(keyType)),
    });
  }, []);
  return isMax
    ? values.find(
        (item) => item.value === Math.max(...values.map((item) => item.value))
      )
    : values.find(
        (item) => item.value === Math.min(...values.map((item) => item.value))
      );
};
