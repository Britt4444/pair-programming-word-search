// Pair programming Anthony Chambers and Britt Cowper

const wordSearch = function(
  letters,
  word,
  vertChoice = false,
  reverseChoice = false
) {
  let matrix = letters;
  let wordChoice = word;
  //pass array through transpose function if vertChoice is truthy
  if (vertChoice) {
    matrix = transpose(letters);
  }
  //turn word into reverse array if reverseChoice is truthy
  if (reverseChoice) {
    wordChoice = word.split("").reverse().join("");
  }
  const horizontalJoin = matrix.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(wordChoice)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][i]);
    }
  }
  return newMatrix;
};

module.exports = { wordSearch };
