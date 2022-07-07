/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops */

//for loop result orginal task
const arr = [
  [1, 2], [3, 4], [5, 6, 7]
]

function multiplyAll(arr) {
  let product = 1

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j]
      }
    }
  return product
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))


//try
const nestArray = [[8, 9], [1, 2], [1, 2, 7, 9]]

function multiplyAll(nestArray) {
  let product = 1

  for (let i = 0; i < nestArray.length; i++) {
    for (let j = 0; j < nestArray[i].length; j++) {
      product = product * nestArray[i][j]
    }
  }
  return product
}
const result = multiplyAll([[8, 9], [0.5, 0.1], [1, 2, 7, 9]])
console.log(Math.floor(result))
