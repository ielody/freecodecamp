/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators */

function checkSign(num) {
  return (num === 0) ? "number is zero"
  : (num > 0) ? "number is positive"
  : "number is negative"
}

console.log(checkSign(0))
console.log(checkSign(100))
console.log(checkSign(-100))