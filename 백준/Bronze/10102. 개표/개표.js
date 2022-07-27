const [T, str] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

function compareCount(count) {
  if (count.A === count.B) return "Tie";
  else if (count.A > count.B) return "A";
  else return "B";
}

function counting(str) {
  const temp = { A: 0, B: 0 };
  for (char of str) {
    temp[char]++;
  }
  return temp;
}

function solution(str) {
  const count = counting(str);
  return compareCount(count);
}

process.stdout.write(`${solution(str)}`);