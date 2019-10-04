let camelCase = function (input) {
  let arr = input.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === " ") {
      arr[i] = arr[i].toUpperCase();
    }
  }

  arr = arr.join("");

  arr = arr.replace(/\s+/g, "");

  return arr;
};



console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious