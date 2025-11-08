/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let stringLength = s.length;
  let index = stringLength - 1;

  while (index >= 0 && s[index] === " ") {
    index--;
  }

  let lastWordLength = 0;

  while (lastCarIndex >= 0 && s[index] !== " ") {
    lastWordLength++;
    index--;
  }

  return lastWordLength;
};
