/* eslint-disable no-unused-vars */
export function getMonthName(value) {
  const date = new Date(value);
  const monthName = date.toLocaleString("default", { month: "short" });
  return monthName;
}

export function getDayOfMonth(value){
  const date = new Date(value);
   const dayOfMonth = date.getDate();
   return dayOfMonth
}