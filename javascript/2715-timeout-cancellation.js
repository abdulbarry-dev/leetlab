/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  if (typeof fn !== "function") throw new Error("fn must be a function");
  if (!Array.isArray(args)) throw new Error("args must be an array");
  if (!Number.isInteger(t)) throw new Error("t must be an integer");
  if (args.length < 1 || args.length > 10)
    throw new Error("args must have at least 1 and at most 10 elements");
  if (t < 20 || t > 1000) throw new Error("t must be between 20 and 1000");

  let timeoutId = setTimeout(() => fn(...args), t);

  return function cancelFn() {
    clearTimeout(timeoutId);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
