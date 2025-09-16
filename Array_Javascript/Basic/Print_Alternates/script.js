// Strict mode, always at the top of the file
"use strict";
/*
// Create an empty array
let a = [];
console.log(a);

// Create an array and initialize it with some values
let b = [1, 2, 3, 4, 5];
console.log(b);

// Create using new keyword (Constructor)
let c = new Array(6, 7, 8, 9, 10);
console.log(c);

// Basic operations
// 1. Accessing elements
let arr = ["HTML", "CSS", "JavaScript"];
console.log(arr[0]); // First element
console.log(arr[2]); // Third element

// 2. Accessing the first element of an array
let firstElement = arr[0];
console.log("First Element:", firstElement);

// 3. Accessing the last element of an array
let lastElement = arr[arr.length - 1];
console.log("Last Element:", lastElement);

// 4. Modifying elements
arr[1] = "TypeScript";
console.log("Modified Array:", arr);

// 5. Adding elements
// Using push() to add an element at the end
arr.push("React");
// Using unshift() to add an element at the beginning
arr.unshift("Angular");
console.log("After Push:", arr);

// 6. Removing elements
let arr1 = ["HTML", "CSS", "JavaScript"];
console.log("Original Array:", arr1);
// Using pop() to remove the last element
//let last = arr1.pop();
//console.log("After removing last element: " + arr1);
// Using shift() to remove the first element
//let first = arr1.shift();
//console.log("After removing first element: " + arr1);
// Removes 1 elements starting from index 1
arr1.splice(1, 1);
console.log("After splice:", arr1);

// 7. Array length
console.log("Array Length:", arr1.length);

// 8. Increase and decrease the size of an array
let arr2 = [1, 2, 3];
arr2.length = 7;
console.log("Increased Size:", arr2);
arr2.length = 2;
console.log("Decreased Size:", arr2);
*/
function printAlternates(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i += 2) {
    res.push(arr[i]);
  }
  return res;
}
const array = [10, 20, 30, 40, 50];
const result = printAlternates(array);
console.log("Alternate elements are: ", result.join(" "));

// Recursive approach
function getAlternatesRec(arr, idx, res) {
  if (idx < arr.length) {
    res.push(arr[idx]);
    getAlternatesRec(arr, idx + 2, res);
  }
}

function getAlternates(arr) {
  let res = [];
  getAlternatesRec(arr, 0, res);
  return res;
}

const array1 = [10, 20, 30, 40, 50];
const result1 = getAlternates(array1);
console.log("Alternate elements (Recursion) are: ", result1.join(" "));
