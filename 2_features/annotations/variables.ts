// --If declaration and initialization are on the same line, Typescript will figure out(it will use type inference)

// let apples: number = 5
let apples = 5 //later we cant change the type of variable

// let speed: string = 'fast'
let speed = 'fast'

// let hasName: boolean = true
let hasName = true

// let nothingMuch: null = null
let nothingMuch = null

// let nothing: undefined = undefined
let nothing = undefined

// build in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false, true]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

/*
Type annotations(when to use):
  1.When we declare a variable on one line then initialize it later
  2.When we want a varibale to have a type that cant be infered
  3.When a function return the "any" type and we need to clarify the value


Type Inference(when to use):
  ALWAYS
*/

// --------------------------1. Functions that returns the "any" type
const json = '{"x": 20, "y": 10}'
// const coordinates = JSON.parse(json) // JSON.parse returns any type
const coordinates: { x: number; y: number } = JSON.parse(json) //fixing "any"
console.log(coordinates) //{x: 10, y:20}

// ---"any" type:
// A type, just as "string" or "boolean" are
// Means TS has no idea what this is- cant check for correct property refernce
// AVOID VARIBLE WITH "ANY at all costs

// -------------------------2.When we declare on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// ---------------3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]

// let numberAboveZero = false  //Typescript inference kicked in here only....it things "boolean"
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}

// ================Any type ==============

let randomValues: any = 10
randomValues = true //no error
randomValues = 'prabhash'

// "any" type is also the most capable type in typeScript: is encompasses values of any possible types
// and it doesnot force us to do any checking before we try to call , construct or access property on these values

let myVariable: any = 10
console.log(myVariable.name) // undefined...still shows no error
myVariable() //we can even call it as function..ad still no error from TS
myVariable.toUpperCase() //no error again

// --to tackel above issue TS 3.0 introduced new type: "unknown"
// --"unknown" type is very similar to "any" type
// any value is assignable to type unknown..however we cant asscess any properties nor call or constrcut them

let unknownVariable: unknown = 10
// console.log(unknownVariable.name) //TS will shoe error right away
// in order to get away with the errors we need to use a "type asserssion" to convince Type system that we know better

;(unknownVariable as string).toUpperCase()
