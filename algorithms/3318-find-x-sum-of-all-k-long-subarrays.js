/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  let answer = [];
  for (let i = 0; i <= nums.length - k; i++) {
    const subArray = nums.slice(i, i + k);
    const counts = countOccurrences(subArray);
    const mostFrequent = getMostFrequentElements(counts, x);
    const xSum = calculateXSum(subArray, mostFrequent);
    answer.push(xSum);
  }
  return answer;
};

function countOccurrences(array) {
  const counts = {};
  for (const num of array) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return counts;
}

function getMostFrequentElements(counts, x) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || b[0] - a[0])
    .slice(0, x)
    .map(([num]) => Number(num));
}

function calculateXSum(array, mostFrequent) {
  return array
    .filter((num) => mostFrequent.includes(num))
    .reduce((acc, curr) => acc + curr, 0);
}
