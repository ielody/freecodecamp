/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator */

function testLessThan(val) {
  if (val < 25) {
    return "Under 25"
  }

  if (val < 55) {
    return "Under 55"
  }

  return "55 or Over"
}

console.log(testLessThan(55))
console.log(testLessThan(24))