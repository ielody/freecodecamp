/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator */

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over"
  }
  if (val >= 10) {
    return "10 or Over"
  }

  return "Less than 10"
}

console.log(testGreaterOrEqual(10))
console.log(testGreaterOrEqual(20))