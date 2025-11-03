/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let promise = new Promise((resolve) => {
    promise1.then((value1) => {
      promise2.then((value2) => {
        resolve(value1 + value2);
      });
    });
  }).then((result) => result);

  return promise;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
