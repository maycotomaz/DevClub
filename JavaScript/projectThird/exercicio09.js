
const NumeroOne = 11
const NumeroTwo = 21
const NumeroThree = 31
const NumeroFour = 40

if(NumeroOne % 2 === 0 && NumeroTwo % 2 === 0 && NumeroThree % 2 === 0 && NumeroFour % 2 === 0){
    console.log("Todos eles sao Pares")
}else if(NumeroOne % 2 !== 0 && NumeroTwo % 2 !== 0 && NumeroThree % 2 !== 0 && NumeroFour % 2 !== 0) {
    //se todos sao diferente de  0 que dizer que sobrou resto
    console.log("Todos eles sao Impares")
}else{
    console.log("tudo misturado impar e par")
}