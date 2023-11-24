const convertButton = document.querySelector('.convert-button')
const currencySelectFor = document.querySelector('.currency-select-for')
const currencySelectIn = document.querySelector('.currency-select-in')
const currencyValueToConvert = document.getElementById('to_convert')
const currencyValueConverted = document.getElementById('result-convertes-value')
const inputCurrencyPlaceholder = document.getElementsByName('input-currency')

convertButton.addEventListener('click', convertValues)
currencySelectFor.addEventListener('click', changeCurrencyin)
currencySelectIn.addEventListener('click', changeCurrencyin)


function changeCurrencyin() {
    const currenceNameIn = document.getElementById('currency-name-in')
    const imgConvertIn = document.getElementById('img-convert-in')
    const imgConvertFor = document.getElementById('img-convert-for')
    const currenceNameFor = document.getElementById('currency-name-for')

    // SELECT OPTIONS CONVERT IN

    if (currencySelectIn.value == 'real') {

        currenceNameIn.innerHTML = 'Real';
        imgConvertIn.src = './assets/real.png'
        currencyValueToConvert.innerHTML = 'R$ 0,00'
        inputCurrencyPlaceholder[0].placeholder = 'R$ ...'
    }
    if (currencySelectIn.value == 'dolar') {

        currenceNameIn.innerHTML = 'Dólar';
        imgConvertIn.src = './assets/dolar.png'
        currencyValueToConvert.innerHTML = '$0,00'
        inputCurrencyPlaceholder[0].placeholder = '$ ...'
    }
    if (currencySelectIn.value == 'euro') {

        currenceNameIn.innerHTML = 'Euro';
        imgConvertIn.src = './assets/euro.png'
        currencyValueToConvert.innerHTML = '€ 0,00'
        inputCurrencyPlaceholder[0].placeholder = '€ ...'
    }
    if (currencySelectIn.value == 'libra') {

        currenceNameIn.innerHTML = 'Libra';
        imgConvertIn.src = './assets/libra.png'
        currencyValueToConvert.innerHTML = '£ 0,00'
        inputCurrencyPlaceholder[0].placeholder = '£ ...'
    }
    if (currencySelectIn.value == 'btc') {

        currenceNameIn.innerHTML = 'Bitcoin';
        imgConvertIn.src = './assets/bitcoin.png'
        currencyValueToConvert.innerHTML = '₿ 0,00000'
        inputCurrencyPlaceholder[0].placeholder = '₿ ...'
    }


    // SELECT OPTIONS CONVERT FOR


    if (currencySelectFor.value == 'to-dolar') {

        currenceNameFor.innerHTML = 'Dólar';
        imgConvertFor.src = './assets/dolar.png'
        currencyValueConverted.innerHTML = '$0,00'
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
        currencyValueConverted.innerHTML = '₿ 0,00000'
    }
    if (currencySelectFor.value == 'to-real') {

        currenceNameFor.innerHTML = 'Real';
        imgConvertFor.src = './assets/real.png'
        currencyValueConverted.innerHTML = 'R$ 0,00'
    }

    convertValues()

}


// CONVERT VALUES


function convertValues() {
    const realToDay = 1
    const dolarToDay = 4.90
    const euroToDay = 5.35
    const libraToDay = 6.15
    const btcToDay = 183825

    const inputCurrencyValue = document.querySelector('.input-currency').value

    
    //  CONVERSÃO DE REAL PARA ...

    
    if (currencySelectIn.value == 'real' && currencySelectFor.value == 'to-dolar') {

        let resultRealToDolar = (realToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
           
            style: 'currency',
            currency: 'USD'
        }).format(resultRealToDolar)
    }
    if (currencySelectIn.value == 'real' && currencySelectFor.value == 'to-euro') {

        let resultRealToEuro = (realToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
           
            style: 'currency',
            currency: 'EUR'
        }).format(resultRealToEuro)
    }
    if (currencySelectIn.value == 'real' && currencySelectFor.value == 'to-libra') {

        let resultRealTolibra = (realToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {
            
            style: 'currency',
            currency: 'GBP'
        }).format(resultRealTolibra)
    }
    if (currencySelectIn.value == 'real' && currencySelectFor.value == 'to-btc') {

        let resultRealToBtc = inputCurrencyValue / btcToDay

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultRealToBtc)
    }
    if (currencySelectIn.value == 'real' && currencySelectFor.value == 'to-real') {

        let resultRealToReal = (realToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {

            style: 'currency',
            currency: "BRL"
        }).format(resultRealToReal)
    }


    // CONVERSÃO DE DOLAR PARA ...


    if (currencySelectIn.value == 'dolar' && currencySelectFor.value == 'to-dolar') {

        let resultDolarToDolar = (dolarToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            
            style: 'currency',
            currency: 'USD'
        }).format(resultDolarToDolar)
    }
    if (currencySelectIn.value == 'dolar' && currencySelectFor.value == 'to-euro') {

        let resultDolarToEuro = (dolarToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            
            style: 'currency',
            currency: 'EUR'
        }).format(resultDolarToEuro)
    }
    if (currencySelectIn.value == 'dolar' && currencySelectFor.value == 'to-libra') {

        let resultDolarToLibra = (dolarToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {
           
            style: 'currency',
            currency: 'GBP'
        }).format(resultDolarToLibra)
    }
    if (currencySelectIn.value == 'dolar' && currencySelectFor.value == 'to-btc') {

        let resultDolarToBTC = (dolarToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultDolarToBTC)
    }
    if (currencySelectIn.value == 'dolar' && currencySelectFor.value == 'to-real') {

        const resultDolarToReal = (dolarToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultDolarToReal)
    }


    // CONVERSÃO DE EURO PARA ...





    // VALUE TO CONVERT

    if (currencySelectIn.value == 'real') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }
    if (currencySelectIn.value == 'dolar') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }
    if (currencySelectIn.value == 'euro') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }
    if (currencySelectIn.value == 'libra') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }
    if (currencySelectIn.value == 'btc') {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue)
    }
}