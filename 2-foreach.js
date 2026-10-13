let someNumbers = [4, 8, 15, 16, 23, 42]

let total = 0;

// function runSomething( number, index ) {
//   console.log("running this function", number, index)
//   if (index %2 === 1) {
//     total += number
//   }
// }

// someNumbers.forEach( runSomething )

someNumbers.forEach( (number, index) => {
  console.log("running this function", number, index)
  if (index %2 === 1) {
    total += number
  }
} )

console.log(total)




/* 

for (let i = 0; i < array.length; i++) {
  callback(array[i], i)
}

*/