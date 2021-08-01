// any time we are creating interface..we are creating new type
// we will define what property a vehicle can have
// interface Vehicle {
//   name: string
//   year: number
//   broken: boolean
//   summary(): string
// }

// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`
//   },
// }

// let say vehicle has alot of properties....how we can add annotation here
// we will improve ths by interface
// const printVehicle = (vehicle: {
//   name: string
//   year: number
//   broken: boolean
// }): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken?: ${vehicle.broken}`)
// }

// using interface
// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken?: ${vehicle.broken}`)
//   console.log(vehicle.summary())
// }

// printVehicle(oldCivic)

//--------------------- we can use same interface for two different objects
interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink2 = {
  color: 'black',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

// this encourages us to write re-usable code in TS
printSummary(oldCivic)
printSummary(drink2)

// ---------------------General Strategy for Reusable Code in TS
// 1.Create functions that accept arguments that are types with interfaces
// 2.Objects/classes can decide to 'implement' a given interface to work with a function

/*
  interface XYZ ==(xyz is a gatekeeper to "some function")==> some function
  On=bject #1 <===(must satisfy the"XYZ" interface to work with some function) ==> Object#2
*/
