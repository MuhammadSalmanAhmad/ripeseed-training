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
  if (isMax) {
    const maxValues = yearWeatherData.reduce((acc, item) => {
      return acc.concat({
        Date: item.get("PKT") || item.get("PKST"),
        value: Number(item.get(keyType)),
      });
    }, []);
    return maxValues.find(
      (item) => item.value === Math.max(...maxValues.map((item) => item.value))
    );
  }
  const minValues = yearWeatherData.reduce((acc, item) => {
    return acc.concat({
      Date: item.get("PKT") || item.get("PKST"),
      value: Number(item.get(keyType)),
    });
  }, []);
  const min = Math.min(...minValues.map((item) => item.value));
  return minValues.find((item) => item.value === min);
};

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
