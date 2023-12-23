/**
 * 
 * THIS
 * 
 *  THIS EM INGLES SIGNIFICA => ESTE, ESTA, ISTO ....
 * 
 * 
 * NO JAVASCRIPT, O THIS FAZ REFERENCIA:
 * 
 * NODE -> module.exports
 * WEB -> window
 * 
 * 
 * ESCOPO:
 * 
 *      =>  GLOBAL => Quando começamos a escrever nossa aplicação.
 *          No contexto global, o this faz referencia ao objeto global,
 *          que é o objeto window no navegador de internet ou ao objeto global ao Node.js.
 * 
 *      =>  LOCAL => Por exemplo, dentro de uma função
 * 
 */

// exportando com  this

/*
function multi(firstNumber, seccondNumber) {
    return firstNumber * seccondNumber
}

this.multi = multi

*/

// exportando no escopo local

const person = {
    name: 'Wanderson',
    age: 39,
    talk: function() {
        console.log(this.age)
    }
}

person.talk()