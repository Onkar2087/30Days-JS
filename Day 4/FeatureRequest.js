//1
console.log("Feature Request - 1");
console.log("Printing numbers from 1 to 10 : ");
console.log("Using for loop : ");
for(let i = 1;i<=10;i++){
    console.log(i);
}
console.log("\n");
console.log("Using while loop : ");
let n = 1;
while(n<=10){
    console.log(n);
    n++;
}
console.log("\n");

//2
console.log("Feature Request - 2");
console.log("Table of 5 : ");
for(let i = 1; i<=10; i++){
    console.log(`5 X ${i} is ${5*i}`);
}
console.log("\n");

//3
console.log("Feature Request - 3");
console.log("Pattern printing : ");
for(let i=1;i<=5;i++){
    let print = "";
    for(let j=1;j<=i;j++){
        print += "*"
    }
    console.log(print);
}
console.log("\n");

//4
console.log("Feature Request - 4");
let a = 1;
let sum = 0;
while(a<=10){
    sum = sum + a;
    a++;
}
console.log(`Sum of numbers from 1 to 10 is ${sum}`);
console.log("\n");

//5
console.log("Feature Request - 5");
let z = 5;
let y = 1;
let fact = 1;
do{
    fact = fact * y;
    y++;
}while(y<=z)
console.log(`Factorial of ${z} is ${fact}`);
console.log("\n");
