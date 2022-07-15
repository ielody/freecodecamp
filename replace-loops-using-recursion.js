/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion */

//recursion: a function can be expressed in terms of itself.

function sum(arr, n) {
  if (n <= 0) {
    return 0
  }
return sum(arr, n - 1) + arr[n - 1]
}
console.log(sum([2, 3, 4, 5], 3))


function sum(arr, n) {
  if (n <= 0) {
    return 0
  }
return sum(arr, n - 1) - arr[n - 1]
}
console.log(sum([2, 3, 4, 5], 3))
