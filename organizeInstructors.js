//Create a function named organizeInstructors that will receive an array 
//of instructor objects, and will return a new object that has 
//the following format:

//{
//  CourseName: [instructors]
////} 
//

//let result = instructors.filter(obj => {
//  return obj.course === "Web"
//})

const organizeInstructors = function (instructors) {
  let newObj = {}; // create new empty object
  for (i = 0; i < instructors.length; i++) { // loop through array made up of objects with key-value pairs of instructor names and course names
    if (newObj[instructors[i]["course"]] === undefined) { // if course property is does not exist (is undefined) 
      newObj[instructors[i]["course"]] = [instructors[i]["name"]] // this instruction will create it and set its value as an array containing the name of the instructor that gives the course
    } else { // if the course property already exists, it will simply add the name of the instructor to the arry
      newObj[instructors[i]["course"]].push(instructors[i]["name"])
    }
  }
  return newObj
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));
//
//{
//  iOS: ["Samuel"],
//  Web: ["Victoria", "Karim", "Donald"]
//}
//{
//  Blockchain: ["Brendan"],
//  Web: ["David", "Carlos"],
//  iOS: ["Martha"]
//}