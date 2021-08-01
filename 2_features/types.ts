/*
TYPE: Easy way to refer to the different properties + function that a "value" has.

TYPES: Primitive Types: number/boolen/void/undefined/string/symbol/null
      Object Types: functions/arrays/classes/objects

Why do we care about types?
    Types are used by the Typescript compiler to analize our code for errors
    Types allow other engineers to understand what values are flowing out codebase.

EVERY VALUE THAT WE ASSIGN TO A VARIABLE HAS A TYPE


Type annotation: Code we add to tell Typescript what type of a variable will refer to.
                We (developers) tell Typescript the type

Type inference: Typescript tries to figure out what type of value a varibale refers to
                Typescript guess the type
*/

const today = new Date()
today.getDate()

// here we did not gave short name to the tpye of object. So when we hover over "person" it will show whole object
const person = {
  age: 20,
}
