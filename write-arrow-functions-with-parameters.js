/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters */

//start
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]))

//arrow
const arrowCon = (arr1, arr2) => {
  return arr1.concat(arr2)
}
console.log(arrowCon([2,3,4], [90, 5, 7 ]))


//last arrow
const myConca = (arr1, arr2) => arr1.concat(arr2)

console.log(myConca([5,3,4], [91, 63, 7 ]))