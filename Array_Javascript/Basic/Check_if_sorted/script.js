// Strict mode, always at the top of the file
"use strict";

// Recursive approach
// function getAlternatesRec(arr, idx, res) {
//   if (idx < arr.length) {
//     res.push(arr[idx]);
//     getAlternatesRec(arr, idx + 2, res);
//   }
// }

// Recursive approach for check if sorted
function checkSortedRec(arr, n) {
  if (n == 1 || n == 0) {
    return true;
  }
  return arr[n - 1] >= arr[n - 2] && checkSortedRec(arr, n - 1);
}

function getResult(arr) {
  const n = arr.length;
  return checkSortedRec(arr, n);
}
// Example usage
const array = [1, 2, 3, 4, 5];
const isSorted = getResult(array);
console.log("Is the array sorted? (recursive):", isSorted); // Output: true

// Iterative approach
function checkSortedIter(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
// Example usage
const array2 = [1, 2, 3, 4, 5];
const isSorted2 = checkSortedIter(array2);
console.log("Is the array sorted? (iterative):", isSorted2); // Output: false
