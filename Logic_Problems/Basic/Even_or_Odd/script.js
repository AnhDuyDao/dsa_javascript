// Strict mode, always at the top of the file
"use strict";
function isEven(num) {
  let remainder = num % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
let n = 15;
if (isEven(n)) {
  console.log(`${n} is an even number`);
} else {
  console.log(`${n} is an odd number`);
}
// (Better approach) Bitwise AND operator
function isEvenBitwise(num) {
  if ((num & 1) === 0) {
    return true;
  } else {
    return false;
  }
}
const m = 16;
if (isEvenBitwise(m)) {
  console.log(`${m} is an even number`);
} else {
  console.log(`${m} is an odd number`);
}
