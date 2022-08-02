process.stdout.write(
  require("fs").readFileSync("./dev/stdin").toString().trim()
);