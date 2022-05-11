let [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => num.split(""));

const min = (num) => {
  return parseInt(
    num
      .map((num) => {
        if (num === "6") return 5;
        else return num;
      })
      .join("")
  );
};

const max = (num) => {
  return parseInt(
    num
      .map((num) => {
        if (num === "5") return 6;
        else return num;
      })
      .join("")
  );
};

process.stdout.write(`${min(A) + min(B)} ${max(A) + max(B)}`);