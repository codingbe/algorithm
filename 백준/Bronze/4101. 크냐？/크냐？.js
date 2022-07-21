process.stdout.write(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((temp) => temp.split(" ").map((num) => parseInt(num)))
    .reduce((prev, cur, idx, arr) => {
      if (idx === arr.length - 1) return prev;
      const [A, B] = cur;
      if (A > B) return prev + "Yes\n";
      return prev + "No\n";
    }, "")
);