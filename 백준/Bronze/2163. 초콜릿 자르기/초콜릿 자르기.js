const [N, M] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

console.log(N * M - 1);