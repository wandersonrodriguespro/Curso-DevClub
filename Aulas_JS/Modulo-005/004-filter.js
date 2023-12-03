/** FILTER
 *  
 * - Cria um novo array, a partir do array percorrido (array original)
 * - Cria um novo array APENAS com os elementos filtrados
 * - Aceita 3 parâmetros
 *      - item do array
 *      - index
 *      - Array completo
 * 
 *      return tru      -> Item atual passa para o novo array
 *      return false    -> Item atual NÂO passa para o novo array 
 * 
 * 
 */


const list = [ 20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter (number => number > 100)

//  FORMA MAIS CLEN DE SER FEITO
console.log(`Este é o primeiro exemplo de como fazer e os numeros retornados foram = ${newList}`)


// FORMA DOIS DE SER FEITO

const newList2 = list.filter (number => {
    if (number > 100) return true
    else return false
})

console.log(`Este é o primeiro exemplo de como fazer e os numeros retornados foram = ${newList2}`)

//  FORMA TRES DE SER FEITO

const newList3 = list.filter (number => {
    if (number > 100){
        return true
    }else{
        return false
    }
})

console.log(`Este é o primeiro exemplo de como fazer e os numeros retornados foram = ${newList3}`)


// UM POUCO MAIS INCREMENTADO RETORNANDO NUMEROS MAIORES QUE 100 E PARES


const newList4 = list.filter (number => number > 100 && number % 2 === 0)

console.log(`Nesta lista esta retornando os numeros maiores que 100 e que sejam pares e esse numeros são: ${newList4}`)


// UM POUCO MAIS INCREMENTADO RETORNANDO NUMEROS MAIORES QUE 100 E IMPARES

const newList5 = list.filter (number => number > 100 && number % 2 != 0)


console.log(`Nesta lista esta retornando os numeros maiores que 100 e que são impares e esses numeros são: ${newList5}`)



//  EXEMPLO COM COMPANHIAS

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

const newCompanies = companies.filter (companies => companies.MarketValue < 200 && companies.foundedOn > 1990)

console.log(newCompanies)