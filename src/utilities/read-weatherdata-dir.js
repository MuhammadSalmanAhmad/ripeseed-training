const fs = require("fs");
const path = require("./constants");

fs.readdir(path.weatherDataPath, (err, files) => {
  console.log(typeof files);
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
});
