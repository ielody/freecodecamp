/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator */

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes"
    }
  return "No"
}
console.log(testLogicalAnd(10))
console.log(testLogicalAnd(45))
