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

export function extractValuesByKey(keyType, tempArray, weatherData) {
  for (let data of weatherData) {
    data.forEach((value, key) => {
      if (key === keyType) {
        tempArray.push(value);
      }
    });
  }
}
