/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups */

//use instead of if-else/switch
function phoneticLookup(val) {
  let result = ""
  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie":"Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val]
  return result
}
console.log(phoneticLookup("alpha"))
console.log(phoneticLookup("echo"))
console.log(phoneticLookup("charlie"))