/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
}

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

console.log(highToday)
console.log(highTomorrow)


let food = {
frukt: ["bananer", "mango"],
vegetables: ["carrots", "cucumbers"]
}

const { frukt: eksotisk, vegetables: stirfry } = food

const foodCon = eksotisk.concat(stirfry)
console.log(foodCon)