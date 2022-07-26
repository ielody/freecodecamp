/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions */

//1.
const increment = (number, value = 1) => number + value
console.log(increment(5, 2))
console.log(increment(5))
//answer: 7,6

//2.
const more = (number = 4, value = 6) => number - value
console.log(more(1, 2))
console.log(more())
//answer: -1, -2
