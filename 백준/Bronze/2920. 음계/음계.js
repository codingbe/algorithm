const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .join("");

function solution(input) {
  if (input === "12345678") return "ascending";
  else if (input === "87654321") return "descending";
  else return "mixed";
}

process.stdout.write(solution(input));