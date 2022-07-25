/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions */

//1.
var magi = function() {
  return new Date()
}

//2.
const magic = () => new Date()

console.log(magic())
console.log(magi())