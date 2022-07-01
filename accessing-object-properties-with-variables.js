/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables */

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
}

const playerNumber = 16
const player = testObj[playerNumber]

//const player = testObj[16]
console.log(player)