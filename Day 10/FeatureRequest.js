//1
console.log("Feature Request - 1");
let button = document.querySelector("button");
button.addEventListener("click", function(){
    let para = document.querySelector(".update")
    para.innerHTML = "Hello Duniya, change ho gaya"
})
console.log("\n");

//2
console.log("Feature Request - 2");

let p = document.querySelector(".c")
p.addEventListener("mouseover", function(){
    p.style.backgroundColor = "green";
})
console.log("\n");

let revert  = document.querySelector(".c")
revert.addEventListener("mouseout", function(){
    revert.style.backgroundColor = "";
})
console.log("\n");

//3
console.log("Feature Request - 3");

let kdown = document.querySelector("#kdown");
kdown.addEventListener("keydown", (e) => console.log(e.key));
console.log("\n");

let kup = document.getElementById("kup");
kup.addEventListener("keyup", function(e){
    console.log(e.key);
})
console.log("\n");

//4
console.log("Feature Request - 4");

let form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(form);
    for (let key of formData.entries()) {
        console.log(`${key}`);}
})
console.log("\n");

let dis = document.getElementById("s")
let sel = document.querySelector("select")
sel.addEventListener("change", function(){
    console.log(sel.value);
})
console.log("\n");

//5
console.log("Feature Request - 5");
let parent = document.getElementById('task10');
let b = document.querySelector('#Item');
b.addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.className = 'l';
    newItem.innerHTML = `Item ${parent.children.length + 1}`;
    parent.appendChild(newItem);
})
console.log("\n");