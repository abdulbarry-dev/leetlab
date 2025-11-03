/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (obj.length > 0 || Object.keys(obj).length > 0) return false;
  return true;
};
