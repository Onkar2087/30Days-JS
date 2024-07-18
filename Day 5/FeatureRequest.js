//1
console.log("Feature Request - 1");
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

//2
console.log("Feature Request - 2");
function square(n){
    let ans;
    ans = n * n;
    console.log(`The square of ${n} is ${ans}`);
}
square(23);
console.log("\n");

//3
console.log("Feature Request - 3");
let join = function(str1, str2){
    let chai = str1 + str2;
    console.log(`Concatenated string is ${chai}`);
}
join("Chai aur ", "Code");
console.log("\n");

//4
console.log("Feature Request - 4");
let sum = (n1, n2) => n1 +n2;
console.log(`Sum of numbers is ${sum(100, 300)}`);
console.log("\n");

//5
console.log("Feature Request - 5");
let call =(fun, n)=>{
    for(let i=1;i<=n;i++){
        fun();
    }
}
function chai(){
    console.log("Hello guys, chai peelo");
}