//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1
let arr = [5, 3, 8, 1];
//write your code here
const filterRange = (arr, a, b) =>
  arr.filter((number) => number >= a && number <= b);

let filtered = filterRange(arr, 5, 8);

console.log("Q1:", filtered); // 3,1 (matching values)

console.log("-----------------------------------------------");

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
const filterRangeInPlace = (arr, a, b) =>
  array.filter((number) => number >= a && number <= b);

let array = [5, 3, 8, 1];

console.log("Q2:", filterRangeInPlace(array, 1, 4)); // [3, 1]
