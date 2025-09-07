// require("./xyz");
// const { x, calculateSum } = require("./calculate/sum.js"); // -->> example for common js module system
// import { x, calculateSum } from "./calculate/sum.js";
// import { caluclateMultiply } from "./calculate/multiply.js";
// const { caluclateMultiply } = require("./calculate/multiply.js");
const { x, calculateSum, caluclateMultiply } = require("./calculate");
const data = require("./data.json");
console.log(data);
var name = "Darshan";

var a = 10;

var b = 20;
console.log(x);
calculateSum(a, b);
caluclateMultiply(a, b);

// console.log(name);
// console.log(a + b);

// console.log(global);
// console.log(this); //empty object in node js
// console.log(globalThis); //same as global
// console.log(globalThis === global); //true
