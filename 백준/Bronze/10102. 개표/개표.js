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

function counting(T, str) {
  const temp = { A: 0, B: 0 };
  for (let i = 0; i < T; i++) {
    temp[str[i]]++;
  }
  return temp;
}

function solution(T, str) {
  const count = counting(T, str);
  return compareCount(count);
}

process.stdout.write(`${solution(T, str)}`);