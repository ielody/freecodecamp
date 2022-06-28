/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5"
   } else if (val < 10) {
    return "Less than 10"
  } else {
    return "Greater than or equal to 10"
  }
}

console.log(orderMyLogic(3))
console.log(orderMyLogic(7))
console.log(orderMyLogic(11))