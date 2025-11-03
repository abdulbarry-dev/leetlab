/*
 * LeetCode 2726. Calculator with Method Chaining
 *
 * Constraints:
 *   - actions is a valid JSON array of strings
 *   - values is a valid JSON array of numbers
 *   - 2 <= actions.length <= 2 * 10^4
 *   - 1 <= values.length <= 2 * 10^4 - 1
 *   - actions[i] is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
 *   - First action is always "Calculator"
 *   - Last action is always "getResult"
 */
class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result **= value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
