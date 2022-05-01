const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .toUpperCase();

const count = {};

for (let i = 0; i < input.length; i++) {
  if (!count[input[i]]) count[input[i]] = 1;
  else count[input[i]]++;
}

const max = Math.max(...Object.values(count));
let char = "";

for (alpha in count) {
  if (count[alpha] === max) char += alpha;
}

if (char.length >= 2) console.log("?");
else console.log(char);