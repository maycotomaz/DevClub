

const numero = 2
if(numero % 2 === 0){
    

    if(numero % 5 === 0){
        console.log("e par e divisivel por 5")
    }else{
        console.log("par Mas nao e divisivel por 5")
    }
}else{
    
    for (let i = 2; i <= numero; i++) {
        if (numero % i === 0) {
           console.log("ele e impar, mas nao e primo") 
           break
        }else {
            if(i === numero -1){
            console.log('ele e um numero primo')
            break
        }
    }
  }
}