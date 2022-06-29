/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements */

function caseInSwitch(val) {
  let answer = ""

  switch (val) {
    case 1:
    answer = "alpha"
    console.log("alpha")
    break

    case 2:
    answer = "beta"
    console.log("beta")
    break

    case 3:
    answer = "gamma"
    console.log("gamma")
    break

    case 4:
    answer = "delta"
    console.log("delta")
    break

  }
return answer

}

caseInSwitch(1)
caseInSwitch(2)
caseInSwitch(3)
caseInSwitch(4)
