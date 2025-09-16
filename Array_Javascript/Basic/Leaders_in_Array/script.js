// Strict mode, always at the top of the file
"use strict";
// Using nested loops
function leaders(arr) {
  const result = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[i] <= arr[j]) {
        break;
      }
    }
    if (j === n) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage
const array = [16, 17, 4, 3, 5, 2];
const leadersInArray = leaders(array);
console.log("Leaders in the array:", leadersInArray.toString()); // Output: [17, 5, 2]

// Using single loop from right side
function findLeaders(arr) {
  const leaders = [];
  let maxFromRight = arr[arr.length - 1];
  leaders.push(maxFromRight);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      leaders.push(maxFromRight);
    }
  }
  return leaders.reverse();
}
// Example usage
const array2 = [16, 17, 4, 3, 5, 2];
const leadersInArray2 = findLeaders(array2);
console.log("Leaders in the array (single loop):", leadersInArray2.toString()); // Output: [17, 5, 2]
