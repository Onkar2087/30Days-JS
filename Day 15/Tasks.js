//Task-1
console.log("Task-1");
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

//Task-2
console.log("Task-2");
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

//Task-3
console.log("Task-3");
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

//Task-4
console.log("Task-4");
function greet(name){
    function call(){
        return (`Hola ${name}`);
    }
    return call;
}

let my = greet('Mirabel');
console.log(my());
console.log("\n");

//Task-5
console.log("Task-5");
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


//Task-6
console.log("Task-6");
function createItemManager() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
        listItems: function() {
            console.log("Items in the collection:");
            items.forEach(item => console.log(item));
        }
    };
}

const manager = createItemManager();

manager.addItem("Apple");
manager.addItem("Banana");
manager.addItem("Orange");
manager.listItems();
manager.removeItem("Banana");
manager.listItems();
console.log("\n");


//Task-7
console.log("Task-7");
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('Returning cached result');
            return cache[key];
        } else {
            console.log('Computing new result');
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}
function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(5, 7)); 
console.log(memoizedAdd(2, 3)); 
console.log("\n");

//Task-8
console.log("Task-8");
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
