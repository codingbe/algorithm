const [time, timeTaken] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");
const [h, m, s] = time.split(" ").map((num) => parseInt(num));
const parseTime = parseInt(timeTaken);

function getTime(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

function calTime(time, seconds) {
  return time + seconds;
}

function createTimeStamp(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = (time % 3600) % 60;
  return hours >= 24
    ? `${hours % 24} ${minutes} ${seconds}`
    : `${hours} ${minutes} ${seconds}`;
}

function solution() {
  let result = getTime(h, m, s);
  result = calTime(result, parseTime);

  return createTimeStamp(result);
}

console.log(solution());