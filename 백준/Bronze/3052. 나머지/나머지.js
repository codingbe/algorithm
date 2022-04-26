const answer = [];

require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .forEach((num) => {
    if (!answer.includes(num % 42)) answer.push(num % 42);
  });

console.log(answer.length);