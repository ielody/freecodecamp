/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator */

function testLogicalOr(val) {

  if (val > 20 || val < 10) {
    return "Outside"
  }

  return "Inside"
}

console.log(testLogicalOr(21))
console.log(testLogicalOr(15))
