

// Importando um modulo

/*

  const person = require('./sum')

*/


// Importando funções de 2 Modulos diferentes


/**

    const multi = require('./multi')
    const sum = require('./sum')


    console.log(sum(2,3))
    console.log(multi(2,3))

*/


// Importando funções e Objetos de um modulo unico, primeira maneira


/**
 

    const objectAndFunctions = require('./objectsAndFunctions')
    
    console.log(objectAndFunctions.sum(2,3))
    console.log(objectAndFunctions.multi(3,9))
    console.log(objectAndFunctions.person)

 
*/


//  Importanto funções e objetos de um modulo unico , segunda meneira



const { sum, multi, person } = require('./objectsAndFunctions')

console.log(sum(2, 3))
console.log(multi(3, 9))
console.log(person)


