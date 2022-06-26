/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value */

let processed = 0

function processArg(num) {
  return (num + 3) / 5
}

processed = processArg(7)
console.log(processed)
