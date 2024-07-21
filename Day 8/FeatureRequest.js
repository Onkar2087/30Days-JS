//1
console.log("Feature Request - 1");
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

//2
console.log("Feature Request - 2");
console.log("Array Destructing : ");
let arr = ["Samosa", "Jalebi", "Chai", 100, 98]
const [first, s, t, f, fi] = arr;
console.log(first);
console.log(s);
console.log("\n");

console.log("Object Destructing : ");
book = {
    title : "Shinchan",
    author : "Yugo Saki",
    year : "2009"
}
const {title, author, year} = book;
console.log(author);
console.log(title);
console.log("\n");

//3
console.log("Feature Request - 3");
console.log("Spread Operator : ");
let arr1 = [3,4,5,6];
let arr2 = [...arr1, ...arr, 3,4,5,6]
console.log(arr2);
console.log("\n");

console.log("Rest Operator : ");
function sum(...numbers){
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1,5,6,3,99));
console.log("\n");

//4
console.log("Feature Request - 4");
function mul(a, b=10){
    return a * b;
}
console.log(mul(9));
console.log(mul(101));
console.log("\n");

//5
console.log("Feature Request - 5");
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

const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person = {
    [propName1] : "John",
    [propName2] : "Doe",
    [propName3] : 29
}
console.log(person);