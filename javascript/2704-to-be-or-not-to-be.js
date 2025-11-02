/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    val, // Store the value in the returned object
    toBe(val) {
      if (this.val === val) return true;
      else throw new Error("Not Equal"); // Use "Error" instead of "error"
    },
    notToBe(val) {
      if (this.val !== val) return true;
      else throw new Error("Equal"); // Use "Error" instead of "error"
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
