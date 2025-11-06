/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; // Pointer for the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Place the unique element at position k
      k++;
    }
  }

  return k;
};
let testCases = [
  { input: [1, 1, 2], expectedOutput: 2, expectedArray: [1, 2] },
  {
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    expectedOutput: 5,
    expectedArray: [0, 1, 2, 3, 4],
  },
  { input: [], expectedOutput: 0, expectedArray: [] },
  { input: [1, 1, 1, 1, 1], expectedOutput: 1, expectedArray: [1] },
  { input: [1, 2, 3, 4, 5], expectedOutput: 5, expectedArray: [1, 2, 3, 4, 5] },
];

testCases.forEach(({ input, expectedOutput, expectedArray }, index) => {
  let nums = [...input]; // Create a copy of the input array to avoid mutation
  let result = removeDuplicates(nums);
  console.log(`Test Case ${index + 1}:`);
  console.log(`Input: ${input}`);
  console.log(`Expected Output: ${expectedOutput}, Actual Output: ${result}`);
  console.log(
    `Expected Array: ${expectedArray}, Actual Array: ${nums.slice(0, result)}`,
  );
  console.log(
    result === expectedOutput &&
      nums.slice(0, result).toString() === expectedArray.toString()
      ? "Passed"
      : "Failed",
  );
  console.log("");
});
