/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift */

//shift removes first element and returns it in new array

const myArray = [["John", 23], ["dog", 3]]

const removedFromMyArray = myArray.shift()

console.log(removedFromMyArray)
console.log(myArray)

const vegArray = [["carrot", 23], ["broccoli", 28]]

const removeVeg = vegArray.shift()

console.log(removeVeg)
console.log(vegArray)
