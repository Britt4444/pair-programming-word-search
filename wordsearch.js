// Pair programming Anthony Chambers and Britt Cowper

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

const wordSearch = function(letters, word) {
  let wordChoice = word;

  // Checks empty array, 1st priority
  if (letters.length === 0) {
    return false;
  }

  // Horizontal search, 2nd priority
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoin) {
    if (l.includes(wordChoice)) return true;
  }

  // Vertical search, 3rd priority
  const vertMatrix = transpose(letters);
  const vertJoin = vertMatrix.map((ls) => ls.join(""));
  for (const l of vertJoin) {
    if (l.includes(wordChoice)) return true;
  }

  // Horizontal backwards search, 4th priority
  wordChoice = word.split("").reverse().join("");
  const horizontalJoinRev = letters.map((ls) => ls.join(""));
  for (const l of horizontalJoinRev) {
    if (l.includes(wordChoice)) return true;
  }

  // Vertical backwards search, 5th priority
  const vertJoinRev = vertMatrix.map((ls) => ls.join(""));
  for (const l of vertJoinRev) {
    if (l.includes(wordChoice)) return true;
  }

  return false;
};

module.exports = { wordSearch };
