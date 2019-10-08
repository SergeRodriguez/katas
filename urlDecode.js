// Create a function named urlDecode that will receive a URL encoded string, 
// and return the a JavaScript object that represents that data.

const urlDecode = function (text) {
  let arr = text.split("&"); // console.log(arr);

  arr = arr.map(function (x) { return x.replace(/%20/g, " ") });

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("=");
  }

  let newObj = {}; // create new empty object

  for (i = 0; i < arr.length; i++) { // loop through array made up of arrays containing key value pairs in the form of strings
    if (newObj[arr[i]] === undefined) { // if key property does not exist (is undefined) 
      newObj[arr[i][0]] = arr[i][1] // this instruction will create it and set its value as the string in the key value pair array
    }
  }

  return newObj

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

//{duck: "rubber"}
//{bootcamp: "Lighthouse Labs"}
//{city: "Vancouver", weather: "lots of rain"}
//"lots of rain"
