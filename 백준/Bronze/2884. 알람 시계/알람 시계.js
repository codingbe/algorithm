const fs = require("fs");
const [h, m] = fs
   .readFileSync("./dev/stdin")
   .toString()
   .split(" ")
   .map((num) => parseInt(num));

let timeSum = h * 60 + m - 45;

if (timeSum < 0) timeSum = 1440 + m - 45;

const hour = parseInt(timeSum / 60);
const minutes = timeSum % 60;

console.log(hour, minutes);
