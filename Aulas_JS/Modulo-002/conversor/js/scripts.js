const convertButton = document.querySelector('.convert-button')
const currencySelectFor = document.querySelector('.currency-select-for')
const currencySelectIn = document.querySelector('.currency-select-in')
const currencyValueToConvert = document.getElementById('to_convert')
const currencyValueConverted = document.getElementById('result-convertes-value')
const inputCurrencyPlaceholder = document.getElementsByName('input-currency')

convertButton.addEventListener('click', validation)
currencySelectFor.addEventListener('click', changeCurrencyin)
currencySelectIn.addEventListener('click', changeCurrencyin)

// ALERT 

const mascAlerta = document.querySelector('.mascara-alerta')
const alert = document.querySelector('.alert')
const close = document.querySelector('.closePopup')
const inputCurrency = document.querySelector('.input-currency');
const alertSelect = document.querySelector('.alert-select')
const alertInput = document.querySelector('.alert-input')
inputCurrency.addEventListener('focus', repeatedValues);



function repeatedValues() {
    if (currencySelectIn.value === 'real' && currencySelectFor.value === 'to-real') {
        mascAlerta.style.visibility = 'visible';
        alert.style.display = 'flex';
        currencySelectIn.addEventListener('change', repeatedValues);
        currencySelectFor.addEventListener('change', repeatedValues);
    }
    if (currencySelectIn.value === 'dolar' && currencySelectFor.value === 'to-dolar') {
        mascAlerta.style.visibility = 'visible';
        alert.style.display = 'flex';
        currencySelectIn.addEventListener('change', repeatedValues);
        currencySelectFor.addEventListener('change', repeatedValues);
    }
    if (currencySelectIn.value === 'euro' && currencySelectFor.value === 'to-euro') {
        mascAlerta.style.visibility = 'visible';
        alert.style.display = 'flex';
        currencySelectIn.addEventListener('change', repeatedValues);
        currencySelectFor.addEventListener('change', repeatedValues);
    }
    if (currencySelectIn.value === 'libra' && currencySelectFor.value === 'to-libra') {
        mascAlerta.style.visibility = 'visible';
        alert.style.display = 'flex';
        currencySelectIn.addEventListener('change', repeatedValues);
        currencySelectFor.addEventListener('change', repeatedValues);
    }
    if (currencySelectIn.value === 'btc' && currencySelectFor.value === 'to-btc') {
        mascAlerta.style.visibility = 'visible';
        alert.style.display = 'flex';
        currencySelectIn.addEventListener('change', repeatedValues);
        currencySelectFor.addEventListener('change', repeatedValues);
    }
}

function validation() {
    

    if (currencySelectIn.value == '' || currencySelectFor.value == ''){
        
        alertSelect.style.display = 'flex';
        mascAlerta.style.visibility = 'visible';

    }else if (inputCurrency.value == ''){

        alertInput.style.display = 'flex';
        mascAlerta.style.visibility = 'visible';
        
    }else{
        convertValues()
    }
}


// OPTION


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


const convertValues = async () => {
    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(response => response.json())


    const realToDay = 1
    const dolarToDay = data.USDBRL.high
    const euroToDay = data.EURBRL.high
    const libraToDay = data.GBPBRL.high
    const btcToDay = data.BTCBRL.high


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

        let resultDolarToReal = (dolarToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultDolarToReal)
    }


    // CONVERSÃO DE EURO PARA ...


    if (currencySelectIn.value == 'euro' && currencySelectFor.value == 'to-dolar' ) {

        let resultEuroToDolar = (euroToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultEuroToDolar)
    }
    if (currencySelectIn.value == 'euro' && currencySelectFor.value == 'to-euro') {
        
        let resultEuroToEuro = (euroToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultEuroToEuro)
    }
    if (currencySelectIn.value == 'euro' && currencySelectFor.value == 'to-libra') {
        
        let resultEuroToLibra = (euroToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultEuroToLibra)
    }
    if (currencySelectIn.value == 'euro' && currencySelectFor.value == 'to-btc') {
        
        let resultEuroToBtc = (euroToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultEuroToBtc)
    }
    if (currencySelectIn.value == 'euro' && currencySelectFor.value == 'to-real') {
        
        let resultEuroTorReal = (euroToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('pt-Br', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultEuroTorReal)
    }




    // CONVERSÃO DE LIBRA PARA ...




    if (currencySelectIn.value == 'libra' && currencySelectFor.value == 'to-dolar') {

        let resultLibraToDolar = (libraToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultLibraToDolar)
    }
    if (currencySelectIn.value == 'libra' && currencySelectFor.value == 'to-euro') {

        let resultLibraToEuro = (libraToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultLibraToEuro)
    }
    if (currencySelectIn.value == 'libra' && currencySelectFor.value == 'to-libra') {

        let resultLibraToLibra = (libraToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultLibraToLibra)
    }
    if (currencySelectIn.value == 'libra' && currencySelectFor.value == 'to-btc') {

        let resultLibraToBtc = (libraToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultLibraToBtc)
    }
    if (currencySelectIn.value == 'libra' && currencySelectFor.value == 'to-real') {

        let resultLibraToReal = (libraToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('pt-Br', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultLibraToReal)
    }



    // CONVERSÃO DE BTC PARA ...

    
    
    if(currencySelectIn.value == 'btc' && currencySelectFor.value == 'to-dolar') {

        let resultBtcToDolar = (btcToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultBtcToDolar)
    }
    if(currencySelectIn.value == 'btc' && currencySelectFor.value == 'to-euro') {

        let resultBtcToEuro = (btcToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultBtcToEuro)
    }
    if(currencySelectIn.value == 'btc' && currencySelectFor.value == 'to-libra') {

        let resultBtcToLibra = (btcToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultBtcToLibra)
    }
    if(currencySelectIn.value == 'btc' && currencySelectFor.value == 'to-btc') {

        let resultBtcToBtc = (btcToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultBtcToBtc)
    }
    if(currencySelectIn.value == 'btc' && currencySelectFor.value == 'to-real') {

        let resultBtcToReal = (btcToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat ('pt-Br', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultBtcToReal)
    }


    
    
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


mascAlerta.addEventListener('click', function () {
    closePopup();
});

function closePopup() {

    alert.style.display = 'none'
    alertSelect.style.display = 'none'
    alertInput.style.display = 'none'
    mascAlerta.style.visibility = "hidden"

}