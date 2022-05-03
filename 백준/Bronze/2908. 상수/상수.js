const [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num.split("").reverse().join("")));

A > B ? console.log(A) : console.log(B);