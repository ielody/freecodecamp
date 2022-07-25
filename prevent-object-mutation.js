/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/prevent-object-mutation */

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  }
  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99
  } catch (ex) {
  console.log(ex)
  }
  return MATH_CONSTANTS.PI
}
const PI = freezeObj()
console.log(PI)


let obj = {
  name: "Black phone",
  review: "Scary"
}
//Object.freeze(obj)
obj.review = "Good"
obj.rating = "7.0"
console.log(obj)