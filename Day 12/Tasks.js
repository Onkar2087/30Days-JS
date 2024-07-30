//Task-1
console.log("Task-1");
function tryError(){
    throw new Error(`Intentioanl Error`);
}

try{
    tryError();
}
catch(error){
    console.error(error.message)
}
console.log("\n");

//Task-2
console.log("Task-2");
function check(n, d){
    if(d === 0){
        throw new Error(`Can't divide by zero`);
    }
    return n/d;
}
try{
    let ans = check(10, 0);
    console.log(ans);
}
catch(error){
    console.log(`Error = `,error.message);
}
console.log("\n");

//Task-3
console.log("Task-3");
function t3(){
    try{
        console.log("Try block performing a division of 1 by 0");
        let ans = 1/0;
        throw new Error(`Error by 0, not possible - change denominator`)

    }
    catch(error){
        console.log("Catch block: Error is encountered : ",error.message);
    }
    finally{
        console.log("Finally block : Hello");
    }
}
t3();
console.log("\n");

//Task-4
console.log("Task-4");
class chaiError extends Error{
    constructor(message, errorCode){
    super(message);
    this.name = "New Error";
    this.errorCode = errorCode
    }
}

function t4(){
    try{
        console.log(`t4 is being executed`);
        throw new chaiError(`Error Occured`, 456)
    }
    catch(error){
        console.error(`Catch Block => Error encountered name is =>${error.name}, message displayed will be ${error.message} and it's code is ${error.errorCode}`);
    }
    finally{
        console.log("FInally Block : Solved");
    }
}
t4();
console.log("\n");

//Task-5
console.log("Task-5");
class validate extends Error{
    constructor(message){
        super(message);
        this.name = "Validation Error";
    }
}

function validInput(input){
    if(!input || input.trim() === ""){
        throw new validate("Input cannot be empty");
    }
    console.log("Input is valid");
}

try{
    const  input = "";
    validInput(input);
}
catch(error){
    if(error instanceof validate){
        console.log(`Validation Error = `, error.message);
    }
    else{
        console.log(`Unexpected Error occured`);
    }
}finally{
    console.log(`Final Block => try-catch has been over`);
}
console.log("\n");

//Task-6
console.log("Task-6");
let promise1 = new Promise(function(resolve, reject){
    let n = Math.random();
    if(n<0.5){
        resolve("Promise was resolved");
    }
    else{
        reject("OHHO, your promise was rejected")
    }
})

promise1.then(function(message){
    console.log(`Then block of task 6 execued and the message is ${message}`);
})
.catch(function(error){
    console.log(`Catch block of task 6 executed and the message is ${error}`);
})
console.log("\n");

//Task-7
console.log("Task-7");
let promise2 = new Promise(function(resolve, reject){
    let x = Math.random();
    if(x<0.5){
        resolve("Promise was resolved");
    }
    else{
        reject("OHHO, your promise was rejected")
    }
})

async function consumePromise2(){
    try{
        let print = await promise2;
        console.log("Try block of task 7 executed and the message is = ", print);
    }
    catch(e){
        console.log("Catch block of task 7 executed and the message is = ", e);
    }
}

consumePromise2();
console.log("\n");

//Task-8
console.log("Task-8");
fetch("https://unknown.com")
.then(function(url){
    if(!url.ok){
        throw new Error("URL was not right");
    }
    return url.json();
})
.then(function(jsoon){
    console.log(jsoon);
})
.catch(function(e){
    console.log(`Catch Block => Error Detected => ${e.message}`);
})
console.log("\n");

//Task-9
console.log("Task-9");
async function task9(){
    try{
        let t9 = await fetch("https:\\my.com");

    if(!t9.ok){
        throw new Error("URL is not up to mark");
    }
    let result = await t9.json();
    console.log(`URL was fine and the data retrieved is ${result}`);
    }
    catch(error){
        console.log("Error = ", error.message);
    }
}

task9();
console.log("\n");