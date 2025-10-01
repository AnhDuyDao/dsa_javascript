// Strict mode, always at the top of the file
"use strict";

function sumOfSquareNaturals(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

// Example usage
const n = 5;
const result = sumOfSquareNaturals(n);
console.log(`Sum of squares of first ${n} natural numbers is:`, result); // Output: 55

// More mathematical approach
function sumOfSquareNaturalsMath(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

const resultMath = sumOfSquareNaturalsMath(n);
console.log(
  `Sum of squares of first ${n} natural numbers (math approach) is:`,
  resultMath
); // Output: 55
// Overflow so
