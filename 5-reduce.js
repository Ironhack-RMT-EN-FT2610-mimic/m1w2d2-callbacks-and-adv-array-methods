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


// activity solution:

const calAvgCalories = (arr) => {
  
  if (arr.length === 0) {
    return null
  }
   
  let total = arr.reduce((acc, elem) => {
      return acc + elem.calories
  }, 0)
  
  // let avg = total / arr.length
  // let twoDigit = avg.toFixed(2)
  // let twoDigitNum = parseFloat(twoDigit)
  // return twoDigitNum

  return parseFloat((total / arr.length).toFixed(2))

}