/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes */

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
]

const myData = myArray[3][0][2]
//12

console.log(myData)

const merArray = [
[1, 2, 3],
[3, 4, 5, [11, 12, 13]],
[6, 8, 9]
]

const nyArray = merArray[1][3][2]
//2

console.log(nyArray)
