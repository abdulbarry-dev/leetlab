/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = false; // Track whether the function has been called

  return function (...args) {
    if (called) {
      // If the function has already been called, return undefined
      return undefined;
    }

    called = true; // Mark the function as called
    return fn(...args); // Call the original function and return its result
  };
};

// Example usage:
let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
