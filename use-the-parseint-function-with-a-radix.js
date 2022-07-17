/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix */

//use different number systems instead of default

function convertToInteger(str) {
  return parseInt(str, 2)
}

console.log(convertToInteger("10011"))
