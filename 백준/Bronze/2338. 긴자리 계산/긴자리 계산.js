const [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((num) => BigInt(num));

console.log(`${A + B}\n${A - B}\n${A * B}`);