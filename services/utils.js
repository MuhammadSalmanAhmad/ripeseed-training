export function calculateAverage(keyType, weatherData) {
  let count = 0;
  const sum = weatherData.reduce((sum, item) => {
    sum = sum + Number(item.get(keyType));
    count += 1;
    return sum;
  }, 0);

  const avg = sum / count;
  return avg;
}

export function extractValuesByKey(keyType, weatherData) {
  let tempArray = []
  weatherData.forEach((data)=>{
     data.forEach((value, key) => {
      if (key === keyType) {
        tempArray.push(value);
      }
    });
  })
  return tempArray
}

/* eslint-disable no-unused-vars */
export function getMonthName(value) {
  const date = new Date(value);
  const monthName = date.toLocaleString("default", { month: "short" });
  return monthName;
}

export function getDayOfMonth(value) {
  const date = new Date(value);
  const dayOfMonth = date.getDate();
  return dayOfMonth;
}
