/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator */

function testStrict(val) {
  if (val === 7) {
    return "Equal"
  }
  return "Not Equal"
}
console.log(testStrict(7))
