// require("./xyz");
// const { x, calculateSum } = require("./sum.js");   // -->> example for common js module system
import { x, calculateSum } from "./sum.js"; // -->> example for es6 module system
var name = "Darshan";

var a = 10;

var b = 20;
console.log(x);
calculateSum(a, b);

// console.log(name);
// console.log(a + b);

// console.log(global);
// console.log(this); //empty object in node js
// console.log(globalThis); //same as global
// console.log(globalThis === global); //true
