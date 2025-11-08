/**
 * Calculate the square root of x rounded down to the nearest integer.
 * Uses binary search without any built-in exponent functions.
 *
 * @param {number} x - Non-negative integer
 * @return {number} - Square root rounded down
 *
 * Time Complexity: O(log x)
 * Space Complexity: O(1)
 */
function mySqrt(x) {
  if (x < 2) return x;

  let left = 1,
    right = Math.floor(x / 2);

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const squared = mid * mid;

    if (squared === x) return mid;
    if (squared < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
