//1
console.log("Feature Request - 1");
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
log("\n");

//2
console.log("Feature Request - 2");
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

//3
console.log("Feature Request - 3");
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

//4
console.log("Feature Request - 4");
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