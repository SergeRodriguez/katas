/* Create a function named repeatNumbers that will return a string with each 
of the given values repeated the appropriate number of times, if there are multiple sets 
of values each set should be separated by a comma. If there is only one set of values 
then you should omit the comma.
 */

let repeatNumbers = function (data) {
  let newArr = [];

  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data[j][1]; i++) {
      newArr.push(data[j][0]);
    }
  }

  let newArr2 = [];
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] !== newArr[i + 1] && newArr[i + 1] !== undefined) {
      newArr2.push(newArr[i]);
      newArr2.push(",");
      newArr2.push(" ");
    } else {
      newArr2.push(newArr[i]);
    }
  }

  newArr2 = newArr2.join("")

  return newArr2;
}


console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // 10101010, 343434343434, 9292