const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

input.pop();

process.stdout.write(
  input.reduce((answer, cur) => {
    const [A, B] = cur;
    return `${answer}${A + B}\n`;
  }, "")
);