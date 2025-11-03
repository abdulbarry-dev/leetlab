/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let totalCost = 0;
  for (let index = 0; index < colors.length; index++) {
    while (index < colors.length - 1 && colors[index] === colors[index + 1]) {
      totalCost += Math.min(neededTime[index], neededTime[index + 1]);
      neededTime[index + 1] = Math.max(
        neededTime[index],
        neededTime[index + 1],
      );
      index++;
    }
  }

  return totalCost;
};
