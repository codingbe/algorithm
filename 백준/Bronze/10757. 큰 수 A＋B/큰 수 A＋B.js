const [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => BigInt(num));

console.log((A + B).toString());