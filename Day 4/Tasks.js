//Task-1
console.log("Task - 1");
console.log("Using for loop : ");
for(let i = 1; i<=10; i++){
    console.log(i);
}
console.log("\n");

//Task-2
console.log("Task - 2");
console.log("Table of 5 : ");
for(let i = 1; i<=10; i++){
    console.log(`5 X ${i} is ${5*i}`);
}
console.log("\n");

//Task-3
console.log("Task - 3");
console.log("Using while loop : ");
let n = 1;
let sum = 0;
while(n<=10){
    sum = sum + n;
    n++;
}
console.log(`Sum of numbers from 1 to 10 is ${sum}`);
console.log("\n");

//Task-4
console.log("Task - 4");
let x = 10;
while(x>=1){
    console.log(x);
    x--;
}
console.log("\n");

//Task-5
console.log("Task - 5");
console.log("Using do while loop : ");
let a = 1;
do {
    console.log(a);
    a++;
} while (a<=5);
console.log("\n");

//Task-6
console.log("Task - 6");
let z = 5;
let y = 1;
let fact = 1;
do{
    fact = fact * y;
    y++;
}while(y<=z)
console.log(`Factorial of ${z} is ${fact}`);
console.log("\n");

//Task-7
console.log("Task - 7");
console.log("Pattern printing : ");
for(let i=1;i<=5;i++){
    let print = "";
    for(let j=1;j<=i;j++){
        print += "*"
    }
    console.log(print);
}
console.log("\n");

//Task-8
console.log("Task - 8");
console.log("Using continue statement : ");
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
console.log("\n");

//Task-9
console.log("Task - 9");
console.log("Using break statement : ");
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
console.log("\n");