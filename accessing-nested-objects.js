/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects */

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
}
const gloveBoxContents = myStorage.car.inside["glove box"]

console.log(gloveBoxContents)
//maps


const packingList = {
  "backpack": {
    "inside": {
      "large pocket": "clothes",
      "small pocket": "toiletries"
    },
    "outside": {
      "top pocket": "cables",
      "side pocket": ["camera", "medicine"]
    }
  }
}

const sidePocketContents = packingList.backpack.outside["side pocket"]
console.log(sidePocketContents)
//camera