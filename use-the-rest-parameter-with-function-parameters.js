/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters */


//rest parameter eliminates need to check args array

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0)
}
console.log(sum(2, 4, 6))


const strings = [" cucumber ", " tomato ", " carrot "]
const newString = ["water melon ", ...strings, " mango"]
console.log(newString)

function addFood(...strings) {
  return newString.reduce((a, b) => a + b,...strings)
}
console.log(addFood(...strings, ...newString))


function totalSum(...args) {
  let total = 0
  for (const x of args) {
    total -= x
  }
  return total
}
console.log(totalSum(1, 2, 3))
console.log(totalSum(1, 2, 3, 5, 6))

