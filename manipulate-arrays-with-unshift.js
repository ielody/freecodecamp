/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift */

//

const myArray = [["John", 23], ["dog"]]

myArray.shift()

myArray.unshift(["Paul", 35])

//console.log(myArray)

const sentence = ["Running", "around", "in the garden"]

sentence.shift()
sentence.unshift("Dancing")

//console.log(sentence)

const numbers = [3,4,5]

numbers.unshift(1,2)

console.log(numbers)
