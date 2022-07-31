const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((str) => str.split(" ").map(Number))
  .reduce(
    (answer, cur) => {
      const [x, y] = cur;
      if (x === 0 || y === 0) return { ...answer, AXIS: answer["AXIS"] + 1 };
      if (x > 0 && y > 0) return { ...answer, Q1: answer["Q1"] + 1 };
      if (x < 0 && y > 0) return { ...answer, Q2: answer["Q2"] + 1 };
      if (x < 0 && y < 0) return { ...answer, Q3: answer["Q3"] + 1 };
      if (x > 0 && y < 0) return { ...answer, Q4: answer["Q4"] + 1 };
    },
    { Q1: 0, Q2: 0, Q3: 0, Q4: 0, AXIS: 0 }
  );

function solution(input) {
  let answer = "";
  for (key in input) {
    answer += `${key}: ${input[key]}\n`;
  }
  return answer;
}

process.stdout.write(solution(input));