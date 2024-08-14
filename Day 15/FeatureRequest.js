//1
console.log("Feature Request - 1");
function outer()
{
    let name = "Rain";

    function inner(){
        console.log(`Rain ${name} come now`);
    }
    return inner;
}

let print = outer()
print();
console.log("\n");

//2
console.log("Feature Request - 2");
function createCounter() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}
const counterInstance = createCounter();
counterInstance.increment();
counterInstance.increment();
console.log(counterInstance.getValue()); 

counterInstance.increment();
console.log(counterInstance.getValue());
console.log("\n");

//3 
console.log("Feature Request - 3");
function createIDGenerator() {
    let lastID = 0;
    function gen() {
        lastID++;
        return lastID;
    }
    return gen
}

const generateID = createIDGenerator();
console.log(generateID());
console.log(generateID());
console.log(generateID());
console.log("\n");

//4
console.log("Feature Request - 4");
let functionArray = [];

for (let i = 0; i < 5; i++) {
    functionArray[i] = (function(index)
    {
        return function() {
            console.log(index);
        };
    })(i);
}

functionArray[0]();
functionArray[1](); 
functionArray[2](); 
functionArray[3](); 
functionArray[4](); 
console.log("\n");

//5
console.log("Feature Request - 5");
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = args.toString();
        if (cache[key]) {
            console.log('Returning cached result for', args);
            return cache[key];
        } else {
            console.log('Computing new result for', args);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));

