/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-object-literal-declarations-using-object-property-shorthand */

const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  }
}

console.log(createPerson("Wilson", 23, "male"))


const food = (type, country, taste) => {
  return {
    type, country, taste
  }
}
console.log(food("Carrot", "Spain", "Sweet"))