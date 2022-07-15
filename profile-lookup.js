/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "32",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "27",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "54",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
]

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]
      } else {
        return "No such property"
      }
    }
  }
}
console.log(lookUpProfile("Akira", "likes"))


function findPerson(age, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if(contacts[i].number === age) {
      if (prop in contacts[i]) {
        return contacts[i][prop]
      } else {
       return "No number in contact"
      }
    }
  }
}
console.log(findPerson("54", "firstName"))