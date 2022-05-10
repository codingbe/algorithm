const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

while (input.length > 0) {
  const [A, B, C] = input
    .shift()
    .split(" ")
    .map((num) => parseInt(num));

  B - A > C - B ? console.log(B - A - 1) : console.log(C - B - 1);
}