//Task-1
function add(n1, n2){
    return n1 + n2;
}
export {add};


//Task-2
let person = {
    name : "Dory",
    color : "blue with yellow stripes",
    nature(){
        console.log("Helpful and sweet");
    }
}
export {person};


//Task-3
function greet(message){
    console.log(`The greeting is ${message}`);
}
let hungry = () =>{
    if(true){
        console.log("Here is the menu");
    }
    else{
        console.log("What would you like to have for dessert");
    }
}
export {greet, hungry};


//Task-4
function multiply(a, b){
    console.log(`The multiplication of ${a} and ${b} is ${a*b}`);
}
export {multiply};


//Task-5
const movie1 = "Frozen";
const movie2 = "Cars";
const movie3 = "Encanto";

function info1(){
    console.log(`In ${movie1}, a character was Elsa`);
}

function info2(){
    console.log(`In ${movie2}, character was Lightning Mcqueen`);
}

function info3(){
    console.log(`In ${movie3}, character was Mirabel`);
}
export{movie1, movie2, movie3, info1, info2, info3};


//Task-6
let my = ["Read", "right", "to", "left"];
export {my};


//Task7