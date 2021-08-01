/*
Type annotations for functions: Code we add to tell TS what type of argument a function will recieve and what type of values it will return 

Type inference: TS treis to figure out what type of value a function will return

 */

const add = (a: number, b: number) => {
  // tS will only check the type and not the logic
  return a + b
}

// even thou is is not necessery to add return annotation..still we will add
const substract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

// anonimous function
const multiply = function (a: number, b: number): number {
  return a * b
}

// there will be no return value
const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

// const logWeather = (forecast: {date: Date, weather:string}): void =>{
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }

// --destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)

// ----------------optional parameter
// we can have any number of optional parameter
// but optional parameters should come after required parameters
function addition(num1: number, num2?: number): number {
  return num1 + num2
}

addition(5, 10)
addition(5) // num2 will be undefined
