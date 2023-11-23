const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector('.currency-select')



convertButton.addEventListener("click", convertValues)

function convertValues(){
    const dolarToday = 5.4
    const euroToday = 6.2

    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('#to_convert')
    const currencyValueConverted = document.querySelector('#result-convertes-value')

    
    if (currencySelect.value == 'to-dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == 'to-euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    

    // console.log(currencyValueConverted);

}