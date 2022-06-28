/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values */

function compareEquality(a, b) {
  if (a === b) {
    return "Equal"
  }
  return "Not Equal"
}
console.log(compareEquality(10, "10"))
console.log(compareEquality(10, 10))
console.log(compareEquality(10, 9))