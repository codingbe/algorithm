const [T, input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((data, idx) => {
    if (idx === 1) return data.split(" ").map((num) => parseInt(num));
    else return parseInt(data);
  });

let count = 0;

for (let i = 0; i < T; i++) {
  if (
    (count % 3 === 0 && input[i] === 0) ||
    (count % 3 === 1 && input[i] === 1) ||
    (count % 3 === 2 && input[i] === 2)
  )
    count++;
}

console.log(count);