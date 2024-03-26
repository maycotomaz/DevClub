

const Maior = (Number1, Number2) => {
    if (Number1 > Number2) {
        console.log(`${Number1} é Maior que ${Number2}`)
    }else if(Number1 < Number2){
        console.log(`${Number1} nao e maior que ${Number2}`)
    }else{
        console.log(`${Number1} é ${Number2} sao iguais`)
    }
    
}
Maior(1,10)