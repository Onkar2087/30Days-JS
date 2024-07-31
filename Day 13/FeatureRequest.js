//1
console.log("Feature Request - 1");
import {multiply as m} from "./Module.js"
console.log(m(17, 8));
console.log("\n");

//2
console.log("Feature Request - 2");
import {greet, hungry} from "./Module.js"
console.log(greet("Hola Casita"));
console.log(hungry(false));
console.log("\n");

//3
console.log("Feaure Request - 3");

import losh from 'lodash';
import { my } from "./Module.js";
import axios from "axios";
console.log(losh.reverse(my));

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