let [N, Ninfo] = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

N = parseInt(N);
Ninfo = Ninfo.split("");
let cnt = 0;

while (Ninfo[Ninfo.length - 1] === "S") {
  Ninfo.pop();
  cnt++;
}

for (let i = 0; i < Ninfo.length; i++) {
  if (Ninfo[i] === "S") {
    if (Ninfo[i - 1] !== "*") {
      Ninfo.splice(i, 0, "*");
    } else {
      Ninfo.splice(i + 1, 0, "*");
    }
    i++;
    cnt++;
  } else {
    if (Ninfo[i - 1] !== "*" && Ninfo[i + 1] !== "*" && Ninfo[i] !== "*") {
      Ninfo.splice(i, 0, "*");
      Ninfo.splice(i + 3, 0, "*");
      i += 3;
      cnt += 2;
    } else if (Ninfo[i - 1] === "*" && Ninfo[i + 1] !== "*" && Ninfo[i] !== "*" && Ninfo[i] === "L") {
      Ninfo.splice(i + 2, 0, "*");
      i += 2;
      cnt++;
    }
  }
}

console.log(cnt);