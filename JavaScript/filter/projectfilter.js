


const list = [20,3,234,12,17,541,6,87,275,1000]

const NewList = list.filter(Number =>{ //pra saber se e par
    if(Number % 2 !== 0) return false // se o meu number dividido por 2 for diferente de 0 ele nao e par estou com resto da divisao
    
    if(Number % 5 !== 0) return false
           
    return true    
    
})

console.log(NewList)


