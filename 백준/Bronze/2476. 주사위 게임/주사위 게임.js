const TENTHOUSAND = 10000;
const THOUSAND = 1000;
const HUNDRED = 100;

function calByCompare(A, B, C) {
  if (A === B && B === C) return TENTHOUSAND + A * THOUSAND;
  if (A === B || A === C) return THOUSAND + A * HUNDRED;
  if (B === C) return THOUSAND + B * HUNDRED;
  return Math.max(A, B, C) * HUNDRED;
}

console.log(
  `${require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((arr) => arr.split(" ").map(Number))
    .reduce((max, cur) => {
      const [A, B, C] = cur;
      const target = calByCompare(A, B, C);
      if (target > max) return target;
      return max;
    }, 0)}`
);