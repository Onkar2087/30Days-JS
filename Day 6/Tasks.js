//Task-1
console.log("Task-1");
let a = [10, 20, 30, 40, 50];
console.log(a);
console.log("\n");

//Task-2
console.log("Task-2");
console.log(`First elemetn of the array = ${a[0]}`);
console.log(`Last element of the array = ${a[4]}`);
console.log("\n");

//Task-3
console.log("Task-3");
a.push("flag");
console.log(a);
console.log("\n");

//Task-4
console.log("Task-4");
a.pop();
a.pop();
console.log(a);
console.log("\n");

//Task-5
console.log("Task-5");
a.shift();
console.log(a);
console.log("\n");

//Task-6
console.log("Task-6");
a.unshift("chai");
console.log(a);
console.log("\n");

//Task-7
console.log("Task-7");
let arr = [10, 25, 30, 45, 50];
let maparr = arr.map(i => i * 2);
console.log(maparr);
console.log("\n");

//Task-8
console.log("Task-8");
let filarr = arr.filter(i => i%2 === 0);
console.log(filarr);
console.log("\n");

//Task-9
console.log("Task-9");
let redarr = arr.reduce((acc, cur) => acc + cur, 0);
console.log(redarr);
console.log("\n");

//Task-10
console.log("Task-10");
for(let i in arr){
    console.log(`${i}th element of the array is ${arr[i]}`);
}
console.log("\n");

//Task-11
console.log("Task-11");
arr.forEach(i => console.log(i));
console.log("\n");

//Task-12
console.log("Task-12");
let mul = [[1,5], 
['Samosa', 'Jalebi'],
['Green', 'Tea'],
['10', 'Amigos']];
console.log(mul);
console.log("\n");

//Task-13
console.log("Task-13");
console.log(mul[2]);