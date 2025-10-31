/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
       const arr = x.toString().split("");
        let i = 0, j =  arr.length - 1;
        console.log(arr);
        while (i < j){
            console.log(`arr[i] = ${arr[i]}, arr[j] = ${arr[j]}`);
            if (arr[i] !=  arr[j]) return false;
            i++;
            j--;

        }
        return true;
};
console.log(isPalindrome(-10));