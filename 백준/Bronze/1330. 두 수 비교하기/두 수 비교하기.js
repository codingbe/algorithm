const fs = require("fs");
const [A, B] = fs
   .readFileSync("/dev/stdin")
   .toString()
   .split(" ")
   .map((num) => parseInt(num));

const compare = (A, B) => {
   if (A > B) {
      return ">";
   } else if (A < B) {
      return "<";
   } else if (A === B) {
      return "==";
   }
};

console.log(compare(A, B));
