/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const */

let s = [5, 7, 2]
function editInPlace() {
  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace()
console.log(s)