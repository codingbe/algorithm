const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

let result = 0;

while (input.length > 0) {
  const num = input.shift();
  result += num * num;
}

console.log(result % 10);