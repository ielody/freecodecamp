/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements */


function testSize(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else {
    return "Huge"
  }
}

console.log(testSize(3))
console.log(testSize(6))
console.log(testSize(11))
console.log(testSize(19))
console.log(testSize(22))
