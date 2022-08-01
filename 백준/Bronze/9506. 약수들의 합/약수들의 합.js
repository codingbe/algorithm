function checkSum(nums, input) {
  const sum = nums.reduce((sum, cur) => sum + cur, 0);
  if (sum === input) return true;
  return false;
}

function printAnswer(divisor, check, input) {
  if (check) {
    return `${input} = ${divisor.reduce((str, cur, idx) => {
      if (idx === 0) {
        return (str += `${cur}`);
      } else return (str += ` + ${cur}`);
    }, "")}\n`;
  }
  return `${input} is NOT perfect.\n`;
}

function solution(input) {
  const divisor = [];
  const cnt = Math.sqrt(input * 2);
  for (let i = 1; i <= cnt; i++) {
    if (input % i === 0 && divisor.indexOf(i) === -1) {
      divisor.push(i);
      divisor.push(input / i);
    }
  }
  divisor.sort((a, b) => a - b);
  divisor.pop();
  const check = checkSum(divisor, input);
  process.stdout.write(printAnswer(divisor, check, input));
}

require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .forEach((num) => num !== -1 && solution(num));