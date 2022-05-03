let [cnt, nums] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

nums = nums.split(" ");

console.log(Math.min(...nums), Math.max(...nums));