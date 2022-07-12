let answer = "";

require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((num) => parseInt(num))
  .sort((a, b) => a - b)
  .forEach((num) => (answer += `${num}\n`));

console.log(answer);