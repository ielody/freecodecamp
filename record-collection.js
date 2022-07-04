/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection */

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
}

// function updateRecords(records, id, prop, value) {
//   if(value !== "" && prop != "tracks") {
//     records[id][prop] == "value"
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = value
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value)
//   } else if (value === "") {
//     delete records[id][prop]
//   }
//   return records
// }

// const result = updateRecords(recordCollection, 5439, 'artist', 'ABBA')

// console.log(result)


function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || []
    records[id][prop].push(value)
  } else {
    records[id][prop] = value
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

let resu = updateRecords(recordCollection, 1245, 'albumTitle', "Riptide")
console.log(resu)