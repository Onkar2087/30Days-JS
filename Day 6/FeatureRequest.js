//1
console.log("Feature Request-1");
let a = [10, 20, 30, 40, 50];
a.push("flag");
a.pop();
a.shift();
a.unshift("chai");
console.log(a);
console.log("\n");

//2
console.log("Feature Request-2");
let arr = [10, 25, 30, 45, 50];

let maparr = arr.map(i => i * 2);
console.log(maparr);

let filarr = arr.filter(i => i%2 === 0);
console.log(filarr);

let redarr = arr.reduce((acc, cur) => acc + cur, 0);
console.log(redarr);
console.log("\n");

//3
console.log("Feature Request-3");
for(let i in arr){
    console.log(`${i}th element of the array is ${arr[i]}`);
}

arr.forEach(element => {
    console.log(element);
});

//4
console.log("Feature Request-4");
let mul = [[1,5], 
['Samosa', 'Jalebi'],
['Green', 'Tea'],
['10', 'Amigos']];

mul [1] = ['monday','tuesday'];
console.log(mul);