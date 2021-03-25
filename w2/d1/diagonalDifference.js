/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @return {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
  let matrixLength = sqrMatrix.length;
  let sumForward = 0;
  let sumBackward = 0;

  for (let i = 0; i < matrixLength; i++) {
    sumForward += sqrMatrix[i][i];
    sumBackward += sqrMatrix[i][sqrMatrix.length - 1 - i];
  }

  return Math.abs(sumForward - sumBackward);
}

console.log(diagonalDifference(squareMatrix));
