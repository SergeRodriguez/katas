// Create a function named makeCase that will receive an input string and one or 
// more casing options. Return a new string that is formatted based on casing options:

//Precedence of each of the casing styles are as follows, values higher in
// the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower

const makeCase = function (input, theCase) {
  let obj = {}
  obj.string = input;
  obj.caseStyle = theCase;

  if (obj.caseStyle.indexOf("upper") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toUpperCase();
    }
    arr = arr.join("");
    obj.string = arr;
  }
  else if (obj.caseStyle.indexOf("lower") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase();
    }
    arr = arr.join("");
    obj.string = arr;
  }



  if (obj.caseStyle.indexOf("camel") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === " ") {
        arr[i] = arr[i].toUpperCase();
      }
    }
    arr = arr.join("");
    arr = arr.replace(/\s+/g, "");
    obj.string = arr;
  }
  else if (obj.caseStyle.indexOf("pascal") !== -1) {
    let arr = obj.string.split("");
    arr[0] = arr[0].toUpperCase();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === " ") {
        arr[i] = arr[i].toUpperCase();
      }
    }
    arr = arr.join("");
    arr = arr.replace(/\s+/g, "");
    obj.string = arr;
  }
  else if (obj.caseStyle.indexOf("snake") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === " ") {
        arr[i - 1] = "_"
      }
    }
    arr = arr.join("");
    arr = arr.replace(/\s+/g, "");
    obj.string = arr;
  }
  else if (obj.caseStyle.indexOf("kebab") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === " ") {
        arr[i - 1] = "-"
      }
    }
    arr = arr.join("");
    arr = arr.replace(/\s+/g, "");
    obj.string = arr;
  }
  else if (obj.caseStyle.indexOf("title") !== -1) {
    let arr = obj.string.split("");
    arr[0] = arr[0].toUpperCase();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === " ") {
        arr[i] = arr[i].toUpperCase();
      }
    }
    arr = arr.join("");
    obj.string = arr;
  }

  if (obj.caseStyle.indexOf("vowel") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      if (['a', 'e', 'i', 'o', 'u'].indexOf(arr[i].toLowerCase()) !== -1) {
        arr[i] = arr[i].toUpperCase();
      }
    }
    arr = arr.join("");
    obj.string = arr;
  }
  else if (obj.caseStyle.indexOf("consonant") !== -1) {
    let arr = obj.string.split("");
    for (let i = 0; i < arr.length; i++) {
      if (['a', 'e', 'i', 'o', 'u'].indexOf(arr[i].toLowerCase()) === -1) {
        arr[i] = arr[i].toUpperCase();
      }
    }
    arr = arr.join("");
    obj.string = arr;
  }

  return obj
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

//  thisIsAString
//  ThisIsAString
//  this_is_a_string
//  this-is-a-string
//  This Is A String
//  thIs Is A strIng
//  THiS iS a STRiNG
//  THIS_IS_A_STRING