const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num))
  .reduce((prev, cur) => prev + cur, 0);

const minutes = parseInt(input / 60);
const seconds = input % 60;

console.log(minutes + "\n" + seconds);