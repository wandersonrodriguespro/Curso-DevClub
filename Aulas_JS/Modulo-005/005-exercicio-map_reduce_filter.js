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


// const addValue = company => {
//     company.MarketValue = company.MarketValue * 0.10 + company.MarketValue
//     return (company)
// }
// const filterCompany = company => company.foundedOn < 1990
// const CalcValue = (acc, company) => acc + company.MarketValue

// const companiesValue = companies
//     .map(addValue)
//     .filter(filterCompany)
//     .reduce(CalcValue, 0)


// console.log(companiesValue)



// Subtrair 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1980 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE



const subValue = companySub => {
    companySub.MarketValue = companySub.MarketValue - (companySub.MarketValue * 0.10)

    return companySub
}

const filterCompanySub = companyOld => companyOld.foundedOn < 1980
const sumCompanySub = (acc , company) => acc + company.MarketValue


const companyMarketValueSub = companies
.map(subValue)
.filter(filterCompanySub)
.reduce(sumCompanySub, 0)

console.log(companyMarketValueSub);