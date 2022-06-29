/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements */

function sequentialSizes(val) {
  let answer = ""
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"
      console.log("Low")
      break

    case 4:
    case 5:
    case 6:
      answer = "Mid"
      console.log("Mid")
      break

    case 7:
    case 8:
    case 9:
      answer = "High"
      console.log("High")
      break
  }
  return answer
}

sequentialSizes(1)
sequentialSizes(4)
sequentialSizes(7)