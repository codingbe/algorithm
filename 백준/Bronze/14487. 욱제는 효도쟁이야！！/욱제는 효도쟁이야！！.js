let [N, I] = require("fs").readFileSync("./dev/stdin").toString().split("\n");

I = I.split(" ")
  .map((num) => parseInt(num))
  .sort((a, b) => b - a);

let answer = 0;

for (let i = 1; i < I.length; i++) {
  answer += I[i];
}

process.stdout.write(`${answer}`);