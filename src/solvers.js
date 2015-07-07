/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution;
  var results = [];

  var blankBoard = new Board({n : n});

  var createAndCheckBoard = function(row, board) {
    if (row === n) {
      results.push(board);
    } else if (results.length < 1){
      for (var i = 0; i < n; i++) {
        var rowString = JSON.stringify(board.rows());
        console.log(rowString)
        var b = new Board(JSON.parse(rowString));
        b.togglePiece(row, i);
        if (!b.hasAnyRooksConflicts()) {
          createAndCheckBoard(row + 1, b);
        }
      }
    }
  };

  createAndCheckBoard(0, blankBoard);
  solution = (results[0]) ? results[0].rows() : null;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixme

  for (var i = 1; i <= n; i++) {
    solutionCount *= i;
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var results = [];
  if(n === 0) return [];
  var blankBoard = new Board({n : n});

  var createAndCheckBoard = function(row, board) {
    if (row === n) {
      results.push(board);
    } else if (results.length < 1){
      for (var i = 0; i < n; i++) {
        var rowString = JSON.stringify(board.rows());
        console.log(rowString)
        var b = new Board(JSON.parse(rowString));
        b.togglePiece(row, i);
        if (!b.hasAnyQueensConflicts()) {
          createAndCheckBoard(row + 1, b);
        }
      }
    }
  };

  createAndCheckBoard(0, blankBoard);
  solution = (results[0]) ? results[0].rows() : blankBoard.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution;
  var results = [];
  if(n === 0) return 1;
  var blankBoard = new Board({n : n});

  var createAndCheckBoard = function(row, board) {
    if (row === n) {
      results.push(board);
    } else {
      for (var i = 0; i < n; i++) {
        var rowString = JSON.stringify(board.rows());
        console.log(rowString)
        var b = new Board(JSON.parse(rowString));
        b.togglePiece(row, i);
        if (!b.hasAnyQueensConflicts()) {
          createAndCheckBoard(row + 1, b);
        }
      }
    }
  };

  createAndCheckBoard(0, blankBoard);

  console.log('Number of solutions for ' + n + ' queens:', results.length);
  return results.length;
};
