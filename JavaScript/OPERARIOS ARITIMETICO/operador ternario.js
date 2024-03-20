/*
? se
: se nao
*/ 
const rain = false // condiçao(se for verdadeira segue o primeiro se nao o segundo)
const umbrela = rain ? "levar garda-chuva" : "deixar guarda-chuva"

console.log(umbrela)

const balance = true
const IsNoBlocked = true
const accountExist = true 

const transferOk = balance && IsNoBlocked && accountExist ? "transferencia realizada" : "transferencia negada"
console.log(transferOk)

let media = 5
let result = media > 7? 'aprovado' : 'reprovado'
console.log(result)

media += 2
//8.5 de media agr
result = media >= 7 ? 'aprovado' : 'reprovado'
console.log(result)

