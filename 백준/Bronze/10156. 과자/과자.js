const [K, N, M] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let answer = 0;
const total = K * N;
const money = M;
if (total > money) answer = total - money;
process.stdout.write(`${answer}`);