/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays */

// const [a, b, c] = [1, 2, 3, 4, 5, 6]
// console.log(a, b, c)

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6]
// console.log(a, b, c)

let a = 8, b = 6;
[a, b] = [b, a]

console.log(a, b)


function assignV(a,b) {
  return [b,a]
}
console.log(assignV(8,6))