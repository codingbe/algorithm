function calByCompare(A, B, C) {
  if (A === B && B === C) return 10000 + A * 1000;
  if (A === B || A === C) return 1000 + A * 100;
  if (B === C) return 1000 + B * 100;
  return Math.max(A, B, C) * 100;
}

process.stdout.write(
  `${require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((arr) => arr.split(" "))
    .reduce((max, cur) => {
      const [A, B, C] = cur;
      const target = calByCompare(A, B, C);
      if (target > max) return target;
      return max;
    }, 0)}`
);