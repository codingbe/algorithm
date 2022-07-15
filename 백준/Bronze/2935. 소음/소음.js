const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

function calculate(input) {
  let [A, oper, B] = input;
  A = BigInt(A);
  B = BigInt(B);

  if (oper === "+") return String(A + B);
  return String(A * B);
}

console.log(calculate(input));