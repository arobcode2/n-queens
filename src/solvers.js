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

window.avoidsCollision = function(matrix, x, y){

  var [startX, startY] = [x, y]

  while ( matrix[x--] !== undefined && matrix[x][y--] !== undefined ) {
    if (matrix[x][y]) return false;
  };

  [x, y] = [startX, startY];
  while ( matrix[x--] !== undefined && matrix[x][y++] !== undefined ) {
    if ( matrix[x][y] ) return false;
  };


  [x, y] = [startX, startY];
  while ( matrix[x--] !== undefined && matrix[x][y] !== undefined ) {
    if ( matrix[x][y]) return false;
  };  
return true;
};

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  //need a function for taking in a board or a row
  //

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
