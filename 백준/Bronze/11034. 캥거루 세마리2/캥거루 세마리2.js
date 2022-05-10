const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

while (input.length > 0) {
  const [A, B, C] = input
    .shift()
    .split(" ")
    .map((num) => parseInt(num));
  const answer = Math.max(B - A, C - B) - 1 + "\n";
  process.stdout.write(answer);
}