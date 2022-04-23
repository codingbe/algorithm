const fs = require("fs");
const input = parseInt(fs.readFileSync("./dev/stdin").toString());

const isLeapYear = (year) => {
   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 1;
   return 0;
};

console.log(isLeapYear(input));