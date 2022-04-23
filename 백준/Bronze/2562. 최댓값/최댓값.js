const nums = require("fs")
   .readFileSync("./dev/stdin")
   .toString()
   .trim()
   .split("\n")
   .map((num) => parseInt(num));

const max = Math.max(...nums);
const index = nums.indexOf(max) + 1;

console.log(`${max}\n${index}`);