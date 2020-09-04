'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (var i = 1; i <= number; i++) {
  sum += i;
}

console.log(sum);
console.log(process.argv);
//console.log(process.argv[0]); //起動したnodeのパス
//console.log(process.argv[1]); //app.jsのパス
//console.log(process.argv[2]); //引数