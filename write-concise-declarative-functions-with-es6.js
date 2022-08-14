/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-declarative-functions-with-es6 */

//with es6 you can remove "function" when defining functions in objects.

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear
  }
}
bicycle.setGear(3)
console.log(bicycle.gear)