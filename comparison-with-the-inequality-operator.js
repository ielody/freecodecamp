/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator */

function testNotEqual(val) {
  if(val != 99) {
    return "Not Equal"
  }
  return "Equal"
}
console.log(testNotEqual(99))
console.log(testNotEqual(10))