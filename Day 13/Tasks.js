//Task-1
console.log("Task-1");
import {add } from "./Module.js"
console.log(add(6, 17));
console.log("\n");

//Task-2
console.log("Task-2");
import {person} from "./Module.js";
console.log(person);
console.log(person.nature());
console.log("\n");

//Task-3
console.log("Task-3");
import {greet, hungry} from "./Module.js"
console.log(greet("Hola Casita"));
console.log(hungry(false));
console.log("\n");

//Task-4
console.log("Task-4");
import {multiply as m} from "./Module.js"
console.log(m(17, 8));
console.log("\n");

//Task-5
console.log("Task-5");3
import{movie1, movie2, movie3, info1, info2, info3} from "./Module.js"
console.log(`Name of movie 1 is ${movie1}`);
console.log(`Name of movie 2 is ${movie2}`);
console.log(`Name of movie 3 is ${movie3}`);
console.log(info1());
console.log(info2());
console.log(info3());
console.log("\n");

//Task-6
console.log("Task-6");
import losh from 'lodash';
import { my } from "./Module.js";
import axios from "axios";
console.log(losh.reverse(my));

//Task-7
console.log("Task-7");
axios
    .get("https://myapi.com")
    .then(function(api){
        let data = api.data;
        console.log(data);
    })
    .catch(function(error){
        console.log(error.message);
    })
console.log("\n");