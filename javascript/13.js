/**
 * @param {string} s
 * @return {number|null}
 */
var romanToInt = function(s) {
    if (!s || s.length < 1 || s.length > 15) {
        console.log('Invalid input length!');
        return null;
    }

    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let res = 0;
    const arr_s = s.toUpperCase().split("");

    for (let i = 0; i < arr_s.length; i++) {
        const current = romanMap.get(arr_s[i]);
        const next = romanMap.get(arr_s[i + 1]);

        if (!current) {
            console.log(`Invalid Roman numeral character: ${arr_s[i]}`);
            return null;
        }

        // Handle subtraction (e.g. IV = 4, IX = 9, etc.)
        if (next && current < next) {
            res -= current;
        } else {
            res += current;
        }

        console.log(`Char: ${arr_s[i]}, Total: ${res}`);
    }

    return res;
};

// Test
console.log('Result:', romanToInt('MCMXCIV')); // Expected 1994
