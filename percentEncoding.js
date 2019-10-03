const urlEncode = function (text) {
  let arr = text.split("");

  for (let i = 0; i < text.length; i++) {
    if (arr[i] === " ") {
      arr[i] = "%20";
    }
  }

  while (arr[0] === "%20") {
    arr.splice(0, 1);
  }

  while (arr[(arr.length - 1)] === "%20") {
    arr.splice((arr.length - 1), 1);
  }

  arr = arr.join("");

  return arr;
};

//console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("   Lighthouse Labs   "));
//console.log(urlEncode("blue is greener than purple for sure"));