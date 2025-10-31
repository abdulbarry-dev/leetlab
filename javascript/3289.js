/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let seen = [];
    let sneaky = [];

    for (let i = 0; i < nums.length; i++) {
        if (seen.includes(nums[i])) {
            sneaky.push(nums[i]);
        } else {
            seen.push(nums[i]);
        }
    }

    return sneaky;
};

console.log(getSneakyNumbers([0, 1, 1, 0])); // [1, 0]
