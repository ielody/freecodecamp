/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions */

//when you have both local and global variables with the same name, the local one is used.

const outerWear = "T-Shirt"

function myOutfit() {
const outerWear = "Sweater"
  return outerWear
}

console.log(myOutfit(outerWear))