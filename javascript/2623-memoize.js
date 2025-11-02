/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    // Create a unique key from the arguments
    // Convert args array to a string key
    const key = JSON.stringify(args);
    console.log(`Key: ${key}`);
    // Check if we've already calculated this result
    if (cache.has(key)) {
      return cache.get(key);
    }

    // If not cached, calculate the result
    const result = fn(...args);
    console.log(`Result: ${result}`);
    // Store the result in cache
    cache.set(key, result);

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// Test it
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5 (calculates)
console.log(memoizedFn(2, 3)); // 5 (cached)
console.log("callCount:", callCount); // 1
