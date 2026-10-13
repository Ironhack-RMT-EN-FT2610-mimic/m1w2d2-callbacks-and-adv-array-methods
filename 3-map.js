let someNumbers = [4, 8, 15, 16, 23, 42]


let newArray = someNumbers.map((number) => {
  console.log(number)
  // ALWAYS expects a return
  let newValue = number * 100
  return newValue
})

console.log(newArray)


// solution iteration 3 of activity:

function onlyNames(arr) {

  let restaurantNamesArr = arr.map((restaurantObj) => {
    return restaurantObj.name;
  });

  // optional short version:
  // let restaurantNamesArr = arr.map((restaurantObj) => restaurantObj.name);

  return restaurantNamesArr;
}