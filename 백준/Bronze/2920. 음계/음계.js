const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .join("");

function solution(input) {
  if (input.includes("12345678")) return "ascending";
  else if (input.includes("87654321")) return "descending";
  return "mixed";
}

process.stdout.write(solution(input));