// reverse() and toReversed()
let orderedNumbers = [1, 2, 3, 4, 5];

// let reversedNumbers = orderedNumbers.reverse()
let reversedNumbers = orderedNumbers.toReversed()

console.log("reversedNumbers", reversedNumbers)
console.log("original", orderedNumbers)



// sort() and toSorted()

let someLetters = ["a", "f", "z", "b", "h", "c"]

someLetters.sort()
console.log(someLetters)

let someNumbers = [30, 1, 10, 300, 2, 1000, 10, 21, 105, 250]

someNumbers.sort((elem2, elem1) => {
  // add the algorith that defined how these elements are sorted
  // console.log("how many times will this trigger")
  // ALWAYS expects as a return a numerical value:
  // positive number => the first one goes first
  // negative number => the second one goes first
  // zero => they are the same number
  console.log(elem1, elem2)
  if (elem1 > elem2) {
    return 1
  } else if (elem2 > elem1) {
    return -1
  } else {
    return 0
  }
})

console.log(someNumbers)


let morePeople = [
  { name: "Jorge", candy: 21 },
  { name: "Simi", candy: 18 },
  { name: "Daniel", candy: 22 },
  { name: "Julie", candy: 4 },
];

morePeople.sort((person2, person1) => {
  return person2.name.localeCompare(person1.name)
})

console.log(morePeople)