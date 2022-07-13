const cases = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((temp) => temp.split(" "));

function calCases(target, cases) {
  return cases
    .reduce((prev, cur) => {
      if (cur === "@") return prev * 3;
      else if (cur === "%") return prev + 5;
      else if (cur === "#") return prev - 7;
    }, target)
    .toFixed(2);
}

cases.forEach((temp) => {
  const target = parseFloat(temp.shift());
  console.log(calCases(target, temp));
});