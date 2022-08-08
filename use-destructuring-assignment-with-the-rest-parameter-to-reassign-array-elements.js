/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements */

// const [a, b, ...arr] = [1,2,3,4,5,6,7]
// console.log(a, b)
// console.log(arr)


const source = [1,2,3,4,5,6,7,8,9,10]
  function removeFirstTwo(list) {
    const [,, ...arr] = list
    return arr
  }
  const arr = removeFirstTwo(source)

console.log(arr)
console.log(source)
