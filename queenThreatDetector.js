let board = [];

function generateBoard(whiteQueen, blackQueen) {

  for (i = 0; i < 8; i++) {
    board[i] = [];
    for (j = 0; j < 8; j++) {
      board[i].push(0)
    }
  }

  if (whiteQueen[0] > 7 || whiteQueen[1] > 7 || blackQueen[0] > 7 || blackQueen[1] > 7) {
    console.log("Queen location not valid")
  } else {
    board[whiteQueen[0]][whiteQueen[1]] = 1;
    board[blackQueen[0]][blackQueen[1]] = 1;
  }

  return board
}

function queenThreat(generateBoard) {
  let isThreat = false;
  let horizontalThreatCount = 0;
  let verticalThreatCount = 0;
  let upperRightDiagonalThreatCount = 0
  let upperLeftDiagonalThreatCount = 0
  let lowerRightDiagonalThreatCount = 0;
  let lowerLeftDiagonalThreatCount = 0;

  for (let i = 0; i < 8; i++) {
    if (board[whiteQueen[0]][i] === 1) {
      horizontalThreatCount++;
    }
  }

  for (let i = 0; i < 8; i++) {
    if (board[i][whiteQueen[1]] === 1) {
      verticalThreatCount++;
    }
  }

  for (let i = whiteQueen[0], j = whiteQueen[1]; i >= 0; i-- , j++) {
    if (board[i][j] === 1) {
      upperRightDiagonalThreatCount++;

    }
  }

  for (let i = whiteQueen[0], j = whiteQueen[1]; i >= 0; i-- , j--) {
    if (board[i][j] === 1) {
      upperLeftDiagonalThreatCount++;

    }
  }

  for (let i = whiteQueen[0], j = whiteQueen[1]; i < 8; i++ , j++) {
    if (board[i][j] === 1) {
      lowerRightDiagonalThreatCount++;

    }
  }


  for (let i = whiteQueen[0], j = whiteQueen[1]; i < 8; i++ , j--) {
    if (board[i][j] === 1) {
      lowerLeftDiagonalThreatCount++;
    }
  }


  if (horizontalThreatCount === 2 || verticalThreatCount === 2 || upperRightDiagonalThreatCount === 2
    || upperLeftDiagonalThreatCount === 2 || lowerRightDiagonalThreatCount === 2 || lowerLeftDiagonalThreatCount === 2) {
    isThreat = true;
  }

  return isThreat;

}


//let whiteQueen = [0, 5];
//let blackQueen = [7, 5];
//let generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
//console.log(queenThreat(generatedBoard))

let whiteQueen = [4, 6];
let blackQueen = [3, 8];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard))

//[
//  [0, 0, 0, 0, 0, 1, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [1, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0]
//]
//true

//[
//  [1, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 1],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0]
//]
//false