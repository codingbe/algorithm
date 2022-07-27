process.stdout.write(
  require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((str) => str.split(" ").map(Number))
    .reduce((answer, cur) => {
      const [R, E, C] = cur;
      if (R < E - C) return [...answer, "advertise"];
      else if (R === E - C) return [...answer, "does not matter"];
      else return [...answer, "do not advertise"];
    }, [])
    .join("\n")
);