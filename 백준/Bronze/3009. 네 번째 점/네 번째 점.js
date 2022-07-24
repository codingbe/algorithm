const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((nums) => nums.split(" "))
  .reduce(
    (prev, nums) => {
      prev.x.push(nums[0]);
      prev.y.push(nums[1]);
      return prev;
    },
    { x: [], y: [] }
  );

function solution(input) {
  let x = input.x.slice();
  let y = input.y.slice();

  x = x[0] === x[1] ? x[2] : x[0] === x[2] ? x[1] : x[0];
  y = y[0] === y[1] ? y[2] : y[0] === y[2] ? y[1] : y[0];

  return `${x} ${y}`;
}

process.stdout.write(solution(input));