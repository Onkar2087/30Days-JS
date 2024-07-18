//Task-1
console.log("Task-1");
function checkk(n){
    if(n % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}
checkk(89);
console.log("\n");

//Task-2
console.log("Task-2");
function square(n){
    let ans;
    ans = n * n;
    console.log(`The square of ${n} is ${ans}`);
}
square(23);
console.log("\n");

//Task-3
console.log("Task-3");
let max = function(a, b){
    if(a > b){
        console.log(`Maximum of the 2 numbers is a = ${a}`);
    }
    else{
        console.log(`Maximum of the 2 numbers is b = ${b}`);
    }
}
max(234, 678)
console.log("\n");

//Task-4
console.log("Task-4");
let join = function(str1, str2){
    let chai = str1 + str2;
    console.log(`Concatenated string is ${chai}`);
}
join("Chai aur ", "Code");
console.log("\n");

//Task-5
console.log("Task-5");
let sum = (n1, n2) => n1 +n2;
console.log(`Sum of numbers is ${sum(100, 300)}`);
console.log("\n");

//Task-6
console.log("Task-6");
let str = (striny, cha)=>{
    return striny.includes(cha);
}
console.log(str("Hello", 'o'));
console.log("\n");

//Task-7
console.log("Task-7");
let mul = (x, y = 7)=>{
    return `Product of the 2 numbers is ${x * y}`;
}
console.log(mul(10));
console.log("\n");

//Task-8
console.log("Task-8");
let greet = (name, age = 18)=>{
    return `Happy Birthday, Dear ${name} for your ${age} birthday.`
}
console.log(greet("Onkar"));
console.log("\n");

//Task-9
console.log("Task-9");
let call =(fun, n)=>{
    for(let i=1;i<=n;i++){
        fun();
    }
}
function chai(){
    console.log("Hello guys, chai peelo");
}

call(chai, 5);
console.log("\n");

//Task-10
console.log("Task-10");
let high = (f1, f2, val)=>{
    let n = f1(val);
    return f2(n);
}

function f1(n){
    return n += 95;
}

function f2(n){
    return n -= 12;
}

console.log(high(f1, f2, 8));