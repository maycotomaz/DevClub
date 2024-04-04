


const list = [20,3,234,12,17,541,6,87,275,1000]

    

const Companies = [
    {name:"Samsung",MarketValue: 50, CEO: "Kim Hyun Suk", FoundedOn: 1938},
    {name:"Microsoft",MarketValue: 415, CEO: "Satya Nadella", FoundedOn: 1975},
    {name:"Intel",MarketValue: 117, CEO: "Braim Krzanich", FoundedOn: 1968},
    {name:"FaceBook",MarketValue: 383, CEO: "Mark Zuckerberg", FoundedOn: 2004},
    {name:"Spotify",MarketValue: 30, CEO: "Daniel Ek", FoundedOn: 2006},
    {name:"Apple",MarketValue: 845, CEO: "Tim Cook", FoundedOn: 1976}
]
const Add10PorcentMarkValue =  value =>{
    
    value.MarketValue = value.MarketValue + value.MarketValue / 10
    return value
    
}
const YearsFounder =  empresas => empresas.FoundedOn < 2000
    

let AllOldCompaniesMarketValue =  (acc,current) => current.MarketValue + acc;



const NewCompanies = Companies.map( Add10PorcentMarkValue).filter(YearsFounder).reduce(AllOldCompaniesMarketValue,0)
console.log(NewCompanies)

