/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let chunk = [];
  let arrayChunk = [];
  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    if (chunk.length === size) {
      arrayChunk.push(chunk);
      chunk = [];
    }
  }
  // Add the remaining chunk if it exists
  if (chunk.length > 0) {
    arrayChunk.push(chunk);
  }
  return arrayChunk;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); // Expected output: [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // Expected output: [[1, 2, 3], [4, 5]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // Expected output: [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 5)); // Expected output: [[1, 2, 3, 4, 5]]
console.log(chunk([1, 2, 3, 4, 5], 6)); // Expected output: [[1, 2, 3, 4, 5]]
console.log(chunk([1, 2, 3, 4, 5], 0)); // Expected output: []
