//Task-1
console.log("Task-1");
let button = document.querySelector("button");
button.addEventListener("click", function(){
    let para = document.querySelector(".update")
    para.innerHTML = "Hello Duniya, change ho gaya"
})
console.log("\n");

//Task-2
console.log("Task-2");
const i = document.querySelector(".image");

i.addEventListener("dblclick", function() {
    let img = document.querySelector(".dog")
    img.style.visibility == "visible" ? img.style.visibility = "hidden" : img.style.visibility = "visible";
});
console.log("\n");

//Task-3
console.log("Task-3");
let p = document.querySelector(".c")
p.addEventListener("mouseover", function(){
    p.style.backgroundColor = "green";
})
console.log("\n");

//Task-4
console.log("Task-4");
let revert  = document.querySelector(".c")
revert.addEventListener("mouseout", function(){
    revert.style.backgroundColor = "";
})
console.log("\n");

//Task-5
console.log("Task-5");
let kdown = document.querySelector("#kdown");
kdown.addEventListener("keydown", (e) => console.log(e.key));
console.log("\n");

//Task-6
console.log("Task-6");
let kup = document.getElementById("kup");
kup.addEventListener("keyup", function(e){
    console.log(e.key);
})
console.log("\n");

//Task-7
console.log("Task-7");
let form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(form);
    for (let key of formData.entries()) {
        console.log(`${key}`);}
})
console.log("\n");

//Task-8
console.log("Task-8");
let dis = document.getElementById("s")
let sel = document.querySelector("select")
sel.addEventListener("change", function(){
    console.log(sel.value);
})
console.log("\n");

//Task-9
console.log("Task-9");
let l = document.getElementById("list");
l.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        console.log(`you have pressed list item = ${e.target.innerHTML}`);
    }
})
console.log("\n");

//Task-10
console.log("Task-10");
let parent = document.getElementById('task10');
let b = document.querySelector('#Item');
b.addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.className = 'l';
    newItem.innerHTML = `Item ${parent.children.length + 1}`;
    parent.appendChild(newItem);
})
console.log("\n");