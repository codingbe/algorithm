let input = parseInt(require("fs").readFileSync("./dev/stdin").toString());

const btn = {
  A: 300,
  B: 60,
  C: 10,
};
const count = {
  A: 0,
  B: 0,
  C: 0,
};
let check = false;
while (input > 0) {
  if (input - btn.A >= 0) {
    input -= btn.A;
    count.A++;
  } else if (input - btn.B >= 0) {
    input -= btn.B;
    count.B++;
  } else if (input - btn.C >= 0) {
    input -= btn.C;
    count.C++;
  } else {
    check = true;
    break;
  }
}

if (check) console.log(-1);
else console.log(Object.values(count).join(" "));