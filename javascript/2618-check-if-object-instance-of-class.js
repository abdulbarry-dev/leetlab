/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  if (Object(obj) instanceof classFunction) return true;
  return false;

  // let objProto = Object.getPrototypeOf(obj);
  // if (objProto === classFunction.prototype || obj.constructor === classFunction)
  //   return true;
  // return false;
};

// let test = checkIfInstanceOf(new Date(), Date);
// console.log(test);
// checkIfInstanceOf(new Date(), Date);
