//Create a function named sumLargestNumbers that will receive an array 
// of numbers and return the sum of the two largest numbers in that array.

function sortIntegers(a, b) {
  return (b - a);
}

let sumLargestNumbers = function (data) {
  data.sort(sortIntegers); // sorting the array consisting of integers(numbers) in descending order
  return data[0] + data[1]; // returning sum of 2 largest numbers in the array (which is now ordered from largest num to smallest num)
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));