let someNumbers = [10, 2, 32, 44, 51]


// let total = 0;


let total = someNumbers.reduce((accumulator, number) => {

  console.log(accumulator, number)
  // ALWAYS return the next new value of the accumulator
  return accumulator - number

}, 200)

console.log("total", total)

let people = [
  { name: "Jorge", candy: 21 },
  { name: "Eva", candy: 18 },
  { name: "Caro", candy: 22 },
]

let totalCandy = people.reduce((acc, person) => {
  return acc + person.candy
}, 0)

console.log(totalCandy)

let allNames = people.reduce((acc, person) => {
  return acc + person.name + " "
}, "")

console.log(allNames)