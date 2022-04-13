// using transposition function from previous
const transpose = function(matrix) {
  const result = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill());
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result[c][r] = matrix[r][c];
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let str of horizontalJoin) {
    if (str.includes(word)) return true;
  }
  const transposed = transpose(horizontalJoin);
  for (let stri of transposed) {
    if (stri.includes(word)) return true;
  }
  return false;
};



module.exports = wordSearch;

