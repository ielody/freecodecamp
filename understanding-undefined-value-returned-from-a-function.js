/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function */

let sum = 0

function addThree() {
  sum = sum + 3
}

function addFive() {
  sum = sum + 5
}

console.log(addThree())
console.log(addFive())


//test return

let num = 0

function addSeven() {
  return num + 7
}

function addNine() {
  return num + 9
}

console.log(addSeven())
console.log(addNine())
