// reduce acumular valor e traz outro valor
/*
- retorna um valor (pode se um nivi Array, um oject, string, mu,ber, etc)
aceita 4 parametros
-acumulador
-valor total
- indix
-array completo
*/
// o 0 e o valar inicial do acumulador, na primeira passada pega o zero e soma + 1, e faz com todos os itens do array, o valor da soma vai ser o novo valor do acumulador
// o valar inicial nao e um valor fixo


const list = [1,2,3,4]

const sun =list.reduce((acc, current) =>{
    return acc + current
},0) 






const Companies = [
    {name:"Samsung",MarketValue: 50, CEO: "Kim Hyun Suk", FoundedOn: 1938},
    {name:"Microsoft",MarketValue: 415, CEO: "Satya Nadella", FoundedOn: 1975},
    {name:"Intel",MarketValue: 117, CEO: "Braim Krzanich", FoundedOn: 1968},
    {name:"FaceBook",MarketValue: 383, CEO: "Mark Zuckerberg", FoundedOn: 2004},
    {name:"Spotify",MarketValue: 30, CEO: "Daniel Ek", FoundedOn: 2006},
    {name:"Apple",MarketValue: 845, CEO: "Tim Cook", FoundedOn: 1976}
]

const NewCompanies = Companies.reduce((acc, current) =>{
    
    console.log( "acumulador", acc)
    console.log("somando " ,current.MarketValue)

    return current.MarketValue + acc
   
},0)
console.log(NewCompanies)