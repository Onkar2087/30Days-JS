//1
console.log("Feature Request - 1");

const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
    }, 2000)
})
promise1.then(function(){
    console.log("Promise 1 executed");
})

const promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject('Promise 2 not working');
    }, 2000);
})
promise2
.then(function(){})
.catch(function(error){
    console.log(error);
})
console.log("\n");

//2
console.log("Feature Request - 2");
const promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(`Promise 3 execue ho gaya`);
    }, 5000);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(`Promise 4 execue ho gaya`);
    }, 10000);
})

const promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(`Promise 5 execue ho gaya`);
    }, 15000);
})

promise3
.then(function(mes){
    console.log(mes);
    return promise4;
})
.then(function(mes){
    console.log(mes);
    return promise5;
})
.then(function(mes){
    console.log(mes);
})
console.log("\n");

//3
console.log("Feature Request - 3");

const promise6 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(`Task 4 implemeneted right`);
    }, 3000)
})

async function consumePromise6(){
    const message = await promise6;
    console.log(message);
}

consumePromise6();
console.log("\n");

const promise7 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve(`Promise 7 of ask 5 implemented rightly`);
        }
        else{
            reject(`Task failed successfully`);
        }
    }, 5000);
})

async function consumePromise7(){
    try{
        const message = await promise7;
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise7();
console.log("\n");

//4
console.log("Feature Request - 4");

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
    console.log('Response data:', data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
console.log("\n");


async function fetchData() {
try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Assuming the response is in JSON format
    console.log('Response data:', data);
    } 
catch (error) {
    console.error('Error fetching data:', error);
    }
}

fetchData();
console.log("\n");

//5
console.log("Feature Request - 5");

const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise1'), 3000);
});

const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise2'), 7000);
});

const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise3'), 15000);
});

Promise.all([promise9, promise10, promise8])
    .then((values) => {
        console.log('All promises resolved with values:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected with error:', error);
    });
console.log("\n");

const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise1'), 10000);
});
const promise12 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise2'), 2000);
});
const promise13 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise3'), 3000);
});
Promise.race([promise13, promise12, promise11])
    .then((values) => {
        console.log('All promises resolved with values:', values);
    })
    .catch((error) => {
        console.error('One of the promises rejected with error:', error);
    });
console.log("\n");