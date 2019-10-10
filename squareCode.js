const squareCode = function (message) {
  
  str = message.replace(/\s/g, '');
  rows = Math.ceil(Math.sqrt(str.length));

  arr = []
  for (var i = 0, charsLength = str.length; i < charsLength; i += rows) {
    arr.push(str.substring(i, i + rows));
  }

  newArr = []
  for (let i = 0; i <= arr.length; i++) {
    newArr[i] = [""]
    for (var j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) {
        newArr[i] += arr[j][i]
      }
    }
  }

  newArr = newArr.join(" ");

  return newArr;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// clu hlt io  
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau