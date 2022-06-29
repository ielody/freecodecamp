/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements */

function switchOfStuff(val) {
  let answer = ""

  switch(val) {
  case "a":
    answer = "apple"
    console.log("apple")
    break

  case "b":
    answer = "bird"
    console.log("bird")
    break

  case "c":
    answer = "cat"
    console.log("cat")
    break

  default:
    answer = "stuff"
    console.log("stuff")
    break
  }

  return answer
}

switchOfStuff("a")
switchOfStuff("b")
switchOfStuff("c")
switchOfStuff("default")