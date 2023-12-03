/*

    REDUCE
        - Retorna um valor ( pode ser um novo array, um objeto, instring, number, etc)
        - Aceita 4 parâmetros
            - acumolador
            - valor atual
            - index
            - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce ((acumulador, valueAtual) => {
    return acumulador + valueAtual
}, 0)


console.log(`No exemplo 01 o valor da soma é de ${sum}`)


const cart = [
    { prodructName: 'Abobora', preicPerKg: 5, kg: 1 }, // 5
    { prodructName: 'Pepino', preicPerKg: 3.55, kg: 1.3 }, //4,55
    { prodructName: 'Limão', preicPerKg: 1.2, kg: 2 }, // 2,4
    { prodructName: 'Abacate', preicPerKg: 5.4, kg: 1.67 }, // 9,018
    { prodructName: 'Morango', preicPerKg: 11.9, kg: 3 }, // 33
]



const priceTotal = cart.reduce ((acc, priceActual) => {
    const sumPerProduct = priceActual.preicPerKg * priceActual.kg

    return acc + sumPerProduct
}, 0)

console.log(`No exemplo 02 o valor da soma dos produtos no fechamento do carrinho foi de R$ ${priceTotal.toFixed(2)}`)


const companies = [
    {
        name: 'Sansung',
        MarketValue: 50,
        CEO: 'Kim hyun Suk',
        foundedOn: 1938,
    },
    {
        name: 'Microsoft',
        MarketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975,
    },
    {
        name: 'intel',
        MarketValue: 117,
        CEO: 'Brian Krzanicella',
        foundedOn: 1968,
    },
    {
        name: 'Facebook',
        MarketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004,
    },
    {
        name: 'Spotfy',
        MarketValue: 30,
        CEO: 'Daniel Ek',
        foundedOn: 2006,
    },
    {
        name: 'Apple',
        MarketValue: 845,
        CEO: 'Tim Cook',
        foundedOn: 1976,
    },
]

const marketValue = companies.reduce((acc, value)=> {
    return acc + value.MarketValue
},0)

console.log(`No exemplo 3 o valor total das empresa é de $${marketValue} Milhoes de Dolares`)