// Strict mode, always at the top of the file
"use strict";
// Function to calculate the sum of first n natural numbers
// Recursive approach
function sumOfNaturals(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + sumOfNaturals(n - 1);
  }
}

// Iterative approach
function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Fromula approach
function sumUsingFormula(n) {
  return (n * (n + 1)) / 2;
}

// Example usage
let n = 3;
let sum = sumOfNaturals(n);
console.log(`The sum of first ${n} natural numbers is: ${sum}`);
n = 5;
sum = findSum(n);
console.log(`The sum of first ${n} natural numbers is: ${sum}`);

n = 4;
sum = sumUsingFormula(n);
console.log(`The sum of first ${n} natural numbers is: ${sum}`);
