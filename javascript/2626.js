/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

	// constraints
    if (0 <= nums.length <= 1000) return;
    if (0 <= init <= 1000) return;



    let val = init;
    for(let i = 0; i < nums.length; i++){

    	if (0 <= nums[i] <= 1000) return;
    	val = fn(val, nums[i]);
    }

    return val;
    

};



