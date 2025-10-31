/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// Problem direct url : https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/


var map = function(arr, fn) {
    
    if (arr.length > 1000) return [];

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (num < -1e9 || num > 1e9) return [];

        result.push(fn(num, i));
    }

    return result;
};
