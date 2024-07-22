//1
console.log("Feature Request - 1");
let plot = document.querySelector("#h1id")
plot.innerHTML = "I can do this all day"
console.log("\n");

//2
console.log("Feature Request - 2");
let li = document.createElement("li");
li.innerHTML = "Deadpool";
let list = document.querySelector(".lc");
list.appendChild(li);
console.log("\n");

//3
console.log("Feature Request - 3");
let select = document.getElementById('h2id')
select.remove();
console.log("\n");

//4
console.log("Feature Request - 4");
let image = document.querySelector("img");
image.src = "random.png"
console.log("\n");

//5
console.log("Feature Request - 5");
let button = document.querySelector("button")
button.addEventListener("click", function(e){
    let p = document.querySelector("p")
    p.innerHTML = "Hola bhai"
    p.style.color = "red";
})
console.log("\n");