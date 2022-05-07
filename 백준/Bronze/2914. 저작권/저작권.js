const [A, I] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

console.log(A * (I - 1) + 1);