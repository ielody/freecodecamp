/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line */

function nextInLine(arr, item) {
  arr.push(item)
  const removed = arr.shift()
  return removed
}

const testArr = [1, 2, 3, 4, 5]

console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6))
console.log("After: " + JSON.stringify(testArr))