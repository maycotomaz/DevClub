
const button = document.getElementById("convert-button")
const SelectValue = document.getElementById('Selet-Currency')
const currencyValueText = document.getElementById('currency-Value');

const Dolar = 5.2
const euro = 5.9
const Bitcoin =340.96973

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value;
    const reaValuetext = document.getElementById('value-real');

   
    reaValuetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)

    if (SelectValue.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / Dolar);
    } 
    if (SelectValue.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro);
    }
    else if(SelectValue.value === "Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'XBT',
        }).format(inputReais / Bitcoin);
    }
}


const changeCurrency = () => {
    const CurrencyName = document.getElementById('currency-Name')
    const ImgCurrency = document.getElementById('img-currency')

    if (SelectValue.value === 'US$ Dólar americano') {
        CurrencyName.innerHTML = "Dólar americano"
        ImgCurrency.src = "./image/estado-unidos.svg"
    
    }

    if (SelectValue.value === '€ Euro') {
        CurrencyName.innerHTML = "Euro"
        ImgCurrency.src = "./image/euro.svg"
        
    }
    else if(SelectValue.value == "Bitcoin"){
        CurrencyName.innerHTML = "Bitcoin"
        ImgCurrency.src = './image/bitcoin.png'
    }

    convertValues()
}



button.addEventListener('click', convertValues)

SelectValue.addEventListener('change', changeCurrency)


