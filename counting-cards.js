/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards */

let count = 0

// function cc(card) {
//   switch(card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++
//       break

//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--
//       break
//   }

//   if (count > 0) {
//     return count + " Bet"
//   } else {
//     return count + " Hold"
//   }
// }

// console.log(cc(2))
// console.log(cc(3))
// console.log(cc(5))
// console.log(cc(8))
// console.log(cc(10))
// console.log(cc("J"))
// console.log(cc("K"))
// console.log(cc("A"))


function dd(card) {
  let regex = /[JQKA]/
  if (card > 1 && card < 7) {
    count++
  } else if (card === 10 || regex.test(card)) {
    count--
  } else if (count > 0) {
    return count + " Bet"
  }
    return count + " Hold"
}

console.log(dd(2))
console.log(dd(3))
console.log(dd(5))
console.log(dd(8))
console.log(dd(10))
console.log(dd("J"))
console.log(dd("K"))
console.log(dd("A"))