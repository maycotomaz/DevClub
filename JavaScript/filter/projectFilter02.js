

const Companies = [
    {name:"Samsung",MarketValue: 50, CEO: "Kim Hyun Suk", FoundedOn: 1938},
    {name:"Microsoft",MarketValue: 415, CEO: "Satya Nadella", FoundedOn: 1975},
    {name:"Intel",MarketValue: 117, CEO: "Braim Krzanich", FoundedOn: 1968},
    {name:"FaceBook",MarketValue: 383, CEO: "Mark Zuckerberg", FoundedOn: 2004},
    {name:"Spotify",MarketValue: 30, CEO: "Daniel Ek", FoundedOn: 2006},
    {name:"Apple",MarketValue: 845, CEO: "Tim Cook", FoundedOn: 1976}
]

const NewCompanies = Companies.filter( client =>{
   // return client.FoundedOn > 1975 && client.MarketValue > 200
   if(client.FoundedOn <= 1975 ) return false
   if(client.MarketValue <= 200) return false
   else return true
})
console.log(NewCompanies)