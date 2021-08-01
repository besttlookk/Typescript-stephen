/*
Array like structure where each element represents some property of a record.
In tuple number of element inside array is fixed
Also, order of value should match order of the type
*/

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// --above data can also be represented by tuples
// --order inside tuple has very specipic meaning
// --every time we create a drink we have to provide the annotation..thats why we use "alias"
// const pepsi: [string, boolean, number] = ['brown', true, 40]

//Alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 30]
