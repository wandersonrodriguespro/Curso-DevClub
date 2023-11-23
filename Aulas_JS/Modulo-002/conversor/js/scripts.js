const convertButton = document.querySelector('.convert-button')
const currencySelectFor = document.querySelector('.currency-select-for')
const currencySelectIn = document.querySelector('.currency-select-in')
const currencyValueToConvert = document.getElementById('to_convert')
const currencyValueConverted = document.getElementById('result-convertes-value')


convertButton.addEventListener('click', convertValues)
currencySelectFor.addEventListener('click', changeCurrencyFor)
currencySelectIn.addEventListener('click', changeCurrencyin)


// SELECT OPTIONS CONVERT IN

function changeCurrencyin(){
    const currenceNameIn = document.getElementById('currency-name-in')
    const imgConvertIn = document.getElementById('img-convert-in')

    if (currencySelectIn.value == 'real') {
        
        currenceNameIn.innerHTML = 'Real';
        imgConvertIn.src = './assets/real.png'
        currencyValueToConvert.innerHTML = 'R$ 0,00'
    }
    if (currencySelectIn.value == 'dolar') {

        currenceNameIn.innerHTML = 'Dolar';
        imgConvertIn.src = './assets/dolar.png'
        currencyValueToConvert.innerHTML = '$ 0,00'
    }
    if (currencySelectIn.value == 'euro') {
        
        currenceNameIn.innerHTML = 'Euro';
        imgConvertIn.src = './assets/euro.png'
        currencyValueToConvert.innerHTML = '€ 0,00'
    }
    if (currencySelectIn.value == 'libra') {

        currenceNameIn.innerHTML = 'Libra';
        imgConvertIn.src = './assets/libra.png'
        currencyValueToConvert.innerHTML = '£ 0,00'
    }
    if (currencySelectIn.value == 'btc') {
        
        currenceNameIn.innerHTML = 'Bitcoin';
        imgConvertIn.src = './assets/bitcoin.png'
        currencyValueToConvert.innerHTML = '₿ 0,00'
    }
}

// SELECT OPTIONS CONVERT FOR

function changeCurrencyFor (){
    const imgConvertFor = document.getElementById('img-convert-for')
    const currenceNameFor = document.getElementById('currency-name-for')

    if (currencySelectFor.value == 'to-dolar') {
        
        currenceNameFor.innerHTML = 'Dolar';
        imgConvertFor.src = './assets/dolar.png'
        currencyValueConverted.innerHTML = '$ 0,00'
    }
    if (currencySelectFor.value == 'to-euro') {
        
        currenceNameFor.innerHTML = 'Euro';
        imgConvertFor.src = './assets/euro.png'
        currencyValueConverted.innerHTML = '€ 0,00'
    }
    if (currencySelectFor.value == 'to-libra') {

        currenceNameFor.innerHTML = 'Libra';
        imgConvertFor.src = './assets/libra.png'
        currencyValueConverted.innerHTML = '£ 0,00'
    }
    if (currencySelectFor.value == 'to-btc') {

        currenceNameFor.innerHTML = 'Bitcoin';
        imgConvertFor.src = './assets/bitcoin.png'
        currencyValueConverted.innerHTML = '₿ 0,00'
    }
    if (currencySelectFor.value == 'to-real') {

        currenceNameFor.innerHTML = 'Real';
        imgConvertFor.src = './assets/real.png'
        currencyValueConverted.innerHTML = 'R$ 0,00'
    }
}


// CONVERT VALUES


function convertValues() {
    const dolarToday = 5.4
    const euroToday = 6.2

    const inputCurrencyValue = document.querySelector('.input-currency').value

    if (currencySelectFor.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectFor.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}