const [R1, S] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

console.log(S * 2 - R1);