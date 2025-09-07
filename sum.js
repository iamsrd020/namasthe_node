// by default modules are protected
// we have to export and import them to use in other files

// console.log("going to tirupathi");

export var x = "DBOSS";

// function calculateSum(a, b) {
//   const sum = a + b;

//   console.log(sum);
// }

// module.exports = {
//   x,
//   calculateSum,
// }; // -->> example for common js module system

export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
