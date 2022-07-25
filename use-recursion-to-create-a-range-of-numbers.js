/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers */

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum]
  } else {
    let numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum)
    return numbers
  }
}
console.log(rangeOfNumbers(5,9))
