const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((char) => char.charCodeAt(0));

let start = 65;

process.stdout.write(
  `${input.reduce((prev, curr) => {
    const left = start - curr < 0 ? start - curr + 26 : start - curr;
    const right = curr - start < 0 ? curr - start + 26 : curr - start;
    start = curr;
    return prev + Math.min(left, right);
  }, 0)}`
);