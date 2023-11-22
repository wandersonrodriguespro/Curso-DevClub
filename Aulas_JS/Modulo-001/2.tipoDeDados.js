/*

1 - Strings -> Textos.
2 - Numbers -> Números
3 - Boolean -> Boleano
4 - object -> Obejtos
5 - Null & Undefined
6 - Array

*/


// const texto1 = "textos com aspas duplas"
// const texto2 = 'testos com aspas simples'
// const texto3 = `textos com crase` => Consegue pular linha e mais algumas funções - Template literals ou template string

// template string


// const myAge = 39
// const myWife = 34
// const mySons = 3

// const myString = `Minha idade é ${myAge} Anos, e minha esposa tem ${myWife} Anos, formamos uma familia com ${mySons} filhos`



// Numeros

// const number1 = 32 / 2

// console.log(number1)



/*

Boleano

true
false

*/

// objetos

/*

Os objetos são grupos de informações que é possivel resgatar novamente de uma forma mais organizada e facilitada na escrita de código

*/

/*


const wanderson = {
    name: 'Wanderson',
    age: 30,
    address: {
        street: 'Dos Bobos',
        number: 0,
        city: 'SBO',
        state: 'SP',
        country: Brasil
    }
}


*/


// alerando propriedades do objeto


// wanderson.address.number = 2

// desta forma o numero foi alterado de 0 para 2

// Null & Undefined


/*


const user = {
    nome: 'Wanderson',
    idade: 29,
    nomeDoConjuge: 'Juliana',
    id: null
}

console.log(user.idade);

*/



/* 

Null é um dado colocado no código atravez de função ou manualmente
Undefined é quando um dado não exeiste exemplo:

console.log(use.lucasRodrigues)

Por não existir o lucas  o código vai retornar undefined

*/



//Estrutura de dados

// 1 - Array

/*
O Array pode ser tanto com objetos como numeros, strings, numeros e strings objetos e outros arrays 

=> Array com Objetos:

const userArray = [
    {
        nome: 'Wanderson',
        idade: 39,
        nomeDoConjuge: 'juliana',
        id: null,
    },
    {
        nome: 'Juliana',
        idade: 34,
        nomeDoConjuge: 'Wanderson',
        id: null
    }
]


=> Array com numeros:

const number2 [10, 20, 30]


=> Array com strings:

const strings1 ['Wanderson', 'Juliana', 'Lucas', 'Davi', 'Gabriel']

==> Array misto

const arrayMisto [
    'Wanderson', 
    39, 
    {
        nome: 'Juliana',
        idade: 34,
        nomeDoConjuge: 'Wanderson',
        id: null
    }
]

console.log(userArray[0].idade);

*/


