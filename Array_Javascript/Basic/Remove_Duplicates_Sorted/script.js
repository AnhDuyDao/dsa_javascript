// Strict mode, always at the top of the file
"use strict";
// Function to remove duplicates from a sorted array
function removeDuplicates(arr) {
  const n = arr.length;
  const result = new Set();
  for (let i = 0; i < n; i++) {
    result.add(arr[i]);
  }
  return result;
}

// Example usage
const array = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueElements = removeDuplicates(array);
console.log("Array after removing duplicates:", [...uniqueElements].toString()); // Output: [1, 2, 3, 4, 5]
// More concise way
function removeDuplicatesConcise(arr) {
  return [...new Set(arr)];
}
const uniqueElementsConcise = removeDuplicatesConcise(array);
console.log(
  "Array after removing duplicates (concise):",
  uniqueElementsConcise.toString()
); // Output: [1, 2, 3, 4, 5]

// More saving memory approach
function removeDuplicatesInPlace(arr) {
  if (arr.length === 0) return 0;
  const s = new Set();
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!s.has(arr[i])) {
      s.add(arr[i]);
      arr[idx++] = arr[i];
    }
  }
  // After for loop, arr = [1, 2, 3, 4, 5, 4, 4, 5, 5]
  return idx; // idx = 5
}
const array2 = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicatesInPlace(array2);
console.log(
  "Array after removing duplicates in place:",
  array2.slice(0, newSize).toString()
); // Output: [1, 2, 3, 4, 5]

// Expected approach
function removeDuplicatesExpected(arr) {
  const n = arr.length;
  if (n === 0 || n === 1) return n;
  let idx = 1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[idx++] = arr[i];
    }
  }
  return idx;
}
const array3 = [1, 1, 2, 2, 3, 4, 4, 5];
const newSize2 = removeDuplicatesExpected(array3);
console.log(
  "Array after removing duplicates (expected):",
  array3.slice(0, newSize2).toString()
); // Output: [1, 2, 3, 4, 5]
