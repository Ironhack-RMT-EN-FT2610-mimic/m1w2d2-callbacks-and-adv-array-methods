const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

let filteredArr = cars.filter((car) => {
  console.log(car)
  // ALWAYS expects to return a boolean
  if (car.brand[0] === "M" && car.weight < 1) {
    return true // true => add it to the new array
  } else {
    return false // false => don't add it to the new array
  }

  // return car.year === 2010

})

// let filteredArr2 = cars.filter((car) => car.year === 2010)

console.log(filteredArr)