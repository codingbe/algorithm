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

function compareBy(pos) {
  if (pos[0] === pos[1]) return pos[2];
  if (pos[0] === pos[2]) return pos[1];
  return pos[0];
}

function solution(input) {
  let x = input.x.slice(0);
  let y = input.y.slice(0);

  x = compareBy(x);
  y = compareBy(y);

  return `${x} ${y}`;
}

console.log(solution(input));