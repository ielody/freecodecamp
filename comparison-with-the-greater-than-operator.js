/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator */

function testGreaterThan(val) {
  if (val > 100)  {
    return "Over or equal to 100"
  }

  if (val > 10) {
    return "Over 10"
  }

  return "10 or Under"
}

console.log(testGreaterThan(10))
console.log(testGreaterThan(101))
console.log(testGreaterThan(99))
console.log(testGreaterThan(100))
