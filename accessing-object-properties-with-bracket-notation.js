/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation */

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
}

const entreeValue = testObj["an entree"]
const drinkValue = testObj["the drink"]

console.log(entreeValue, drinkValue)