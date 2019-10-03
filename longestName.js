function sortNames(a, b) { // in this case case arguments will be objects inside an array
  return (b.name.length - a.name.length); // this comparison function will instruct the sort() function to sort the array in descending order according to lenght of string of the name property
}

const instructorWithLongestName = function (instructors) {
  instructors.sort(sortNames); // sorts array, the first object in the array is supposed to be the object with the name property that has the longest string 
  return instructors[0] // return the first object in the sorted array
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));