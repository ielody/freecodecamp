/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions */


let myGlobal = 10

function fun1() {
  oopsGlobal = 5
}

console.log(myGlobal)
console.log(oopsGlobal)
