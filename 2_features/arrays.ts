// ----------There are two syntax for array
const carMakers = ['ford', 'toyota', 'chevy']
const blankarray: string[] = [] //syntax 1
const list: Array<number> = [1, 2, 3] //syntax 2
const dates = [new Date(), new Date()]

// two-dimensional array
const carByMake: string[][] = []

/*
---Why typed Array?
  TS can do type inference when extracting values from an array
  TS can prevent us from adding incompatible values to the array
  We can get help with "map", "forEach", reduce function
  Flexiable- arrays can still conatin multiple different types


*/

// Help with inference when sxtracting values
// const car = carMakers[0] //type inference comes into picture
const myCar = carMakers.pop()

//   TS can prevent us from adding incompatible values to the array
// carMakers.push(100) // it will show error

// We can get help with "map", "forEach", reduce function
// since TS knows the type of car...it will suggest auto comlete
carMakers.map((car: string): string => {
  return car.toLowerCase()
})

// Flexiable- arrays can still conatin multiple different types
const importantDates = [new Date(), '2021-10-10']
