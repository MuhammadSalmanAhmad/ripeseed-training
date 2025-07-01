export const validateAvgArg = (arg) => {
  if (!arg) throw new Error("Average argument is required.");
  if (!/^\d{4}\/\d{2}$/.test(arg)) {
    throw new Error("Average argument must be in 'YYYY/MM' format.");
  }
};

export const validateCompareArg = (arg) => {
  if (!arg) throw new Error("Compare argument is required.");
  if (!/^\d{4}\/\d{2}$/.test(arg)) {
    throw new Error("Compare argument must be in 'YYYY/MM' format.");
  }
};

export const validateExtremeArg = (arg) => {
  if (!arg) throw new Error("Extreme argument is required.");
  if (!/^\d{4}$/.test(arg)) {
    throw new Error("Extreme argument must be a 4-digit year.");
  }
};
