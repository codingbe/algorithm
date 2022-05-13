let [N, I] = require("fs").readFileSync("./dev/stdin").toString().split("\n");

N = parseInt(N);
I = I.split(" ")
  .map((num) => parseInt(num))
  .sort((a, b) => b - a)
  .splice(1, N);

process.stdout.write(`${I.reduce((prev, curr) => prev + curr, 0)}`);