process.stdout.write(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .sort((a, b) => a - b)
    .join("\n")
);