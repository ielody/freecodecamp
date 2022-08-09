/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}

const half = ({ max, min }) => (max + min) / 2.0
console.log(half(stats))
//answer 28.015


const facts = {
  name: "Ingeborg",
  address: "Amsterdam",
  age: 38,
  hobby: "yoga"
}

const important = ({ age, hobby }) => ( age + " " + hobby)
console.log(important(facts))
