const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));
input.pop();

function solution(input) {
  return input.reduce((answer, cur) => {
    const [A, B] = cur;
    if (A % B === 0) return answer + "multiple\n";
    if (A % B === A) return answer + "factor\n";
    return answer + "neither\n";
  }, "");
}

process.stdout.write(solution(input));