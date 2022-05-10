const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

const piece = {
  킹: 1,
  퀸: 1,
  룩: 2,
  비숍: 2,
  나이트: 2,
  폰: 8,
};

const answer = [];

for (let pie in piece) {
  const cur = input.shift();
  if (piece[pie] === cur) answer.push(0);
  else if (piece[pie] > cur) answer.push(piece[pie] - cur);
  else answer.push(piece[pie] - cur);
}

console.log(answer.join(" "));