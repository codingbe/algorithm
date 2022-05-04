const [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((num) => parseInt(num));

console.log(A + B);