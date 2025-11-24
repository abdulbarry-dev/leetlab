function prefixesDivBy5(nums: number[]): boolean[] {
    const result: boolean[] = [];
    let currentNum = 0;

    for (let i: number = 0; i < nums.length; i++) {
        currentNum = (2 * currentNum + nums[i]) % 5;
        result.push(currentNum === 0);
    }

    return result;
}