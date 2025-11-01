/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";s
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
