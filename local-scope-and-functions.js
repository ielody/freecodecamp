/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions */

function myLocalScope() {
  const myVar = 5
  console.log('inside myLocalScope', myVar)
}
myLocalScope()

//console.log('outside myLocalScope', myVar)

function shopping() {
  let dress = "summer"
  console.log('insideScope', dress)
}
shopping()

//console.log('outside scope', dress)

