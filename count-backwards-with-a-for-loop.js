/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop */

const myArray = []

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i)
}
console.log(myArray)

for (let i = 0; i < 5; i += 1) {
  myArray.push(i)
}
console.log(myArray)