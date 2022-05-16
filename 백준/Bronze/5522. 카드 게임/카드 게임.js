const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

console.log(input.reduce((prev, curr) => prev + curr, 0));