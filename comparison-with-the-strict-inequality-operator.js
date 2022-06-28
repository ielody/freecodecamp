/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator */

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal"
  }
  return "Equal"
}
console.log(testStrictNotEqual(17))