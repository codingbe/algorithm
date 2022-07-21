const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const answers = [];
input.shift();

input.forEach((nums) => {
  let [A, B] = nums.split(" ").map((num) => parseInt(num));
  const cnt = Math.sqrt(A * B);
  let answer = 1;
  for (let i = 2; i <= cnt; i++) {
    if (A % i === 0 && B % i === 0) {
      answer *= i;
      A = A / i;
      B = B / i;
      i--;
    }
  }
  answers.push(answer * A * B);
});

process.stdout.write(answers.join("\n"));