/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch */

function chainToSwitch(val) {
  let answer = "";

  switch (val) {
   case "bob":
    answer = "Marley"
    console.log("Bob Marley")
    break

    case 42:
    answer = "The Answer"
    console.log("The Answer")
    break

    case 1:
    answer = "There is no #1"
    console.log("There is no #1")
    break

    case 99:
    answer = "Missed me by this much!"
    console.log("Missed me by this much!")
    break

    case 7:
    answer = "Ate Nine"
    console.log("Ate Nine")
    break
  }
  return answer;
}

chainToSwitch(7)
chainToSwitch("bob")
chainToSwitch(42)
chainToSwitch(99)
chainToSwitch(1)
