const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const test = input[i].split(" ");
  const N = parseInt(test.shift());
  const score = test.splice(0, test.length);
  let result = 0;
  let count = 0;

  for (let j = 0; j < N; j++) {
    result += parseInt(score[j]);
  }

  const average = Math.round((result / N) * 1000) / 1000;

  for (let i = 0; i < N; i++) {
    if (score[i] > average) count++;
  }

  let answer = ((count / N) * 100).toFixed(3);
  console.log(answer + "%");
}