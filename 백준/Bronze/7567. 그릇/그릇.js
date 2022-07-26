const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("");

function solution(arr) {
  const input = arr.slice(0);
  let first = input.shift();

  return input.reduce((sum, target) => {
    if (target === first) return sum + 5;
    else {
      first = target;
      return sum + 10;
    }
  }, 10);
}

process.stdout.write(`${solution(input)}`);