const fs = require("fs");
const input = parseInt(fs.readFileSync("./dev/stdin").toString());

const calculateScore = (num) => {
   if (num >= 90) return "A";
   if (num >= 80) return "B";
   if (num >= 70) return "C";
   if (num >= 60) return "D";
   else return "F";
};

console.log(calculateScore(input));