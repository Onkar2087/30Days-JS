//Task-1
console.log("Task-1");
let name = "Onkar";
let age = 22;
console.log(`Name of the person is ${name} and age is ${age}`);
console.log("\n");

//Task-2
console.log("Task-2");
let endMesaage = "Gaana khatam hua";
console.log(`Multi Line String : 
    Shinchan pyara,
    Shinchan - Shinchan
    Pyara - Pyara
    Shinchan - Shinchan
    Pyara - Pyara
    Par hai kitna cute~
    ${endMesaage}`);
console.log("\n");

//Task-3
console.log("Task-3");
let arr = ["Samosa", "Jalebi", "Chai", 100, 98]
const [first, s, t, f, fi] = arr;
console.log(first);
console.log(s);
console.log("\n");

//Task-4
console.log("Task-4");
book = {
    title : "Shinchan",
    author : "Yugo Saki",
    year : "2009"
}
const {title, author, year} = book;
console.log(author);
console.log(title);
console.log("\n");

//Task-5
console.log("Task-5");
let arr1 = [3,4,5,6];
let arr2 = [...arr1, ...arr, 3,4,5,6]
console.log(arr2);
console.log("\n");

//Task-6
console.log("Task-6");
function sum(...numbers){
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1,5,6,3,99));
console.log("\n");

//Task-7
console.log("Task-7");
function mul(a, b=10){
    return a * b;
}
console.log(mul(9));

//Task-8
console.log("Task-8");
let id = 90;
let roll = 101;
function greet(){
    return `Hello Mate`;
}

reg = {
    id,
    roll,
    greet
}
console.log(reg);
console.log("\n");

//Task-9
console.log("Task-9");
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person = {
    [propName1] : "John",
    [propName2] : "Doe",
    [propName3] : 29
}
console.log(person);