// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE


const companies = [
    { name: 'Sansung', MarketValue: 50, CEO: 'Kim hyun Suk', foundedOn: 1938, },
    { name: 'Microsoft', MarketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975, },
    { name: 'intel', MarketValue: 117, CEO: 'Brian Krzanicella', foundedOn: 1968, },
    { name: 'Facebook', MarketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004, },
    { name: 'Spotfy', MarketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006, },
    { name: 'Apple', MarketValue: 845, CEO: 'Tim Cook', foundedOn: 1976, },
]


const companiesValue = companies.map ((valueAtual, index, array) => {
    const atualizarValue = valueAtual.MarketValue * 0.10 + valueAtual.MarketValue

    return(atualizarValue)
})


console.log(companiesValue)