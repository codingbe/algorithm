console.log(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .reduce((answer, cur) => {
      return answer + cur + "\n";
    }, "")
);