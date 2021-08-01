/*
Blueprint to create an object with some fields(values) and methods(functions) to represent a "thing"

---2015 classes vs TS classes_---
>>>MODIFIERS(PUBLIC/PRIVATE/PROTECTED)
PUBLIC: This method can be called any where, any time(by default)
PRIVATE: This method can only be called by other methods in this class
PROTECTED: This Metho can be called by other methods in "this" class, or by other methods in child classes


*/

class Vehicle {
  // color: string
  // constructor(color: string){
  //   this.color = color
  // }
  // ---OR (short)
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep')
  }
}

// if we are going to pass in any argument...we need to define constructor function inside class
// constructor function is a special function...that run the moment we make a new instance
const vehicle = new Vehicle('orange')
console.log(vehicle.color)

// all car should have all the properties of Vehicle class
// to make this happen we could either copy/paste Vehicle class's methods or class car "extends" vehicle
// when we have class that extends other we can "optionally" choose to override different function
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
  }
}

// --instance of the class
// const vehicle = new Vehicle()
// vehicle.drive()

const car = new Car(4, 'red')

//--- where to use classes?
// interfaces + classes = how we get really strong code reuse in TS
