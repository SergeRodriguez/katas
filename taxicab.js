const blocksAway = function (directions) {
  if (directions[0] === "right") {
    let x = directions[1]
    let y = 0

    for (let i = 5; i < directions.length; i += 4) {
      if (directions[i - 1] === "left" && directions[i - 3] === "right") {
        x += directions[i]
      } else if (directions[i - 1] === "left" && directions[i - 3] === "left") {
        x -= directions[i]
      }
    }

    for (let i = 3; i < directions.length; i += 4) {
      if (directions[i - 1] === "left" && directions[i - 3] === "right") {
        y += directions[i]
      } else if (directions[i - 1] === "left" && directions[i - 3] === "left") {
        y -= directions[i]
      }
    }

    let answer = {};
    answer.east = x;
    answer.north = y;
    return answer;
  }

  if (directions[0] === "left") {
    let x = 0
    let y = directions[1]
    for (let i = 3; i < directions.length; i += 4) {
      if (directions[i - 1] === "right" && directions[i - 3] === "left") {
        x += directions[i]
      } else if (directions[i - 1] === "right" && directions[i - 3] === "right") {
        x -= directions[i]
      }
    }

    for (let i = 5; i < directions.length; i += 4) {
      if (directions[i - 1] === "left" && directions[i - 3] === "right") {
        y += directions[i]
      } else if (directions[i - 1] === "right" && directions[i - 3] === "right") {
        y -= directions[i]
      }
    }

    let answer = {};
    answer.east = x;
    answer.north = y;
    return answer
  }
  return answer
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


//{east: 1, north: 3}
//{east: 3, north: 3}
//{east: 0, north: 0}

//Create a function named blocksAway that will receive an array of directions, 
//and return an object that calculates how far north and east those directions will 
//take someone.

