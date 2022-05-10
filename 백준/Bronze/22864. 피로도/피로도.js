const [피로도, 일처리, 쉬기, 최대피로도] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((num) => parseInt(num));

let hour = 0;
let answer = 0;
let 현재피로도 = 0;

while (hour < 24) {
  if (피로도 > 최대피로도) break;
  if (현재피로도 + 피로도 <= 최대피로도) {
    answer += 일처리;
    현재피로도 += 피로도;
  } else {
    if (현재피로도 - 쉬기 < 0) 현재피로도 = 0;
    else 현재피로도 -= 쉬기;
  }
  hour++;
}

console.log(answer);