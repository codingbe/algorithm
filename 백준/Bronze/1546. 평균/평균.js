let [N, score] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

N = parseInt(N);
score = score.split(" ").map((num) => parseInt(num));
const max = Math.max(...score);
let result = 0;

for (let i = 0; i < N; i++) {
  result += (score[i] / max) * 100;
}

console.log(result / N);