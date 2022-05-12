console.log("Hello Bootcamp FullStack")

// declare variables
let firstName = 'Holger'
const myScore = 5.2
var isDeveloper = true // the main diference beetwen let and var is the scope

// scope 
{
 var a // it is also accesible from out 
 let b // just lives here
}

// javascript is multi-paradigm, dynamic and weakly typing but has types
/*
    string
    boolean
    number
    undefined
    null

    types above are consider primitives and are not mutable

    object

    types above are mutable
*/

const secondName = 'Jael'
secondName.toUpperCase() // not apply any changes because of inmutability
console.log(secondName) 

secondNameWithLowerCase = secondName.toLowerCase()// it is neccessary to store the new value in another variable
console.log(secondNameWithLowerCase)

// avoid mutating things as much as possible
const list = []
const anotherList = list.concat(157) // return another list

// objects>>> key: value
const persona = {   
    name: 'holger',
    age: 28,
    isDeveloper: false,
}

console.log(persona.isDeveloper)
persona['isDeveloper'] = true
console.log(persona.isDeveloper)

// functions
const sumar = (x,y) => {
    return x + y
}

console.log(sumar(2,5))

/* use strict is set by default */
