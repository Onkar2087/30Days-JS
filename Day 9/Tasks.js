//Task-1
console.log("Task-1");
let plot = document.querySelector("#h1id")
plot.innerHTML = "I can do this all day"
console.log("\n");

//Task-2
console.log("Task-2");
let change = document.getElementsByClassName('pc')[0]
change.style.backgroundColor = "pink"
console.log("\n");

//Task-3
console.log("Task-3");
let element = document.createElement("div")
element.innerHTML = "bring me THANOS";
document.body.appendChild(element);

//Task-4
console.log("Task-4");
let li = document.createElement("li");
li.innerHTML = "Deadpool";
let list = document.querySelector(".lc");
list.appendChild(li);
console.log("\n");

//Task-5
console.log("Task-5");
let select = document.getElementById('h2id')
select.remove();
console.log("\n");

//Task-6
console.log("Task-6");
let last = document.querySelector("ol")
// last.remove();
console.log("\n");

//Task-7
console.log("Task-7");
let image = document.querySelector("img");
image.src = "random.png"
console.log("\n");

//Task-8
console.log("Task-8");
//Adding
let po = document.getElementsByClassName("lc")[0]
po.classList.add("colory")
//removing
let shifu = document.getElementsByClassName("pc")[0]
shifu.classList.remove("colory")
console.log("\n");

//Task-9
console.log("Task-9");
let button = document.querySelector("button")
button.addEventListener("click", function(e){
    let p = document.querySelector("p")
    p.innerHTML = "Hola bhai"
    p.style.color = "red";
})
console.log("\n");

//Task-10
console.log("Task-10");
let hover = document.querySelector("#h1id");
hover.addEventListener("mouseover", function(){
    let h = document.querySelector("#h1id");
    h.style.borderColor = "purple";
    h.innerHTML = "boom"
})
hover.addEventListener("mouseout", function(){
    let h = document.querySelector("#h1id");
    h.style.borderColor = "";
})

