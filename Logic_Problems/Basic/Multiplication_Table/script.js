// Strict mode, always at the top of the file
"use strict";
/*
// Interative approach
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
let n = 5;
printTable(n);
*/
// Recursive approach
function printTable(num, i = 1) {
  if (i > 10) {
    return;
  }
  console.log(`${num} * ${i} = ${num * i}`);
  i++;
  printTable(num, i);
}
let n = 5;
printTable(n);
