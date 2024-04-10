
const button = document.getElementById("convert-button")

const Dolar = 5.2


const convertValues = ()=>{
    const input = document.getElementById('input-real').value 

    const calc = input / Dolar.toFixed(0)
    console.log(calc)
}

button.addEventListener('click', convertValues) 
