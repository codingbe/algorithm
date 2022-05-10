const [N, M] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => BigInt(num));

console.log(String(N / M));
console.log(String(N % M));