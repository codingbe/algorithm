const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX = 100;
const sumOfTwoNumber = input.reduce((sum, cur) => sum + cur, 0) - MAX;

function solution(sum, arr) {
  const input = arr.slice(0);
  for (let i = 0; i < input.length; i++) {
    for (let j = 1 + i; j < input.length; j++) {
      if (input[i] + input[j] === sum) {
        input.splice(i, 1);
        input.splice(j - 1, 1);
        return input.sort((a, b) => a - b).join("\n");
      }
    }
  }
}

process.stdout.write(solution(sumOfTwoNumber, input));