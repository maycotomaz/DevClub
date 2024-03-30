

function CalculateDiscount(name, value, IsFirstPurchase, IsCashPayment){

   if (IsFirstPurchase && IsCashPayment ) {
    if(value >= 1000){
        let descont =  100 * 0.3
        let result = value / 100 * 30
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }else if( value >= 500 && value < 1000){
        let descont =  100 * 0.25
        let result = value / 100 * 25
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
        
    }else if(value < 500){
        let descont = 100 * 0.2
        let result = value / 100 * 20
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }
   }
   else if(IsFirstPurchase && !IsCashPayment ){
    if(value >= 1000){
        let descont = 100 * 0.2
        let result = value / 100 * 20
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} reais`)
    }else if(value < 1000 && value >= 500){
        let descont = 100* 0.15
        let result = value / 100 * 15
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }else if(value < 500){
        let descont = 100* 0.1
        let result = value / 100 * 10
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }

   }
   else if(!IsFirstPurchase && IsCashPayment ){
    if(value >= 1000){
        let descont =  100 * 0.2
        let result = value / 100 * 20
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }else if(value < 1000 && value > 500){
        let descont = 100 * 0.15
        let result = value / 100 * 15
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `) 
    }else if(value < 500){
        let descont = 100 * 0.10
        let result = value / 100 * 10
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }
    
   }
   else if(!IsFirstPurchase && !IsCashPayment){
    if(value >= 1000){
        let descont = 100 * 0.10
        let result = value / 100 * 10
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed(1) + "%" ) + `  Ficou de ${resto} `)
    }else if(value < 1000 && value > 500){
        let descont = 100 * 0.05
        let result = value / 100 * 5
        let resto = value - result
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, mas com o desconto de `+ (descont.toFixed() + "%" ) + `  Ficou de ${resto} reais `)
    }else if(value < 500){
        let random = (Math.floor((Math.random() * (20 - 10) + 10  ))+ "%")
        console.log(`Obrigado Pela Compra, Sua compra foi um total de ${value} reais, Vc Nao Ganhou Desconto nessa compra :(, mas para sua proxima compra você terá um cupom de `+ (random))
    }
   }
   
}
CalculateDiscount("mauco", 100, false, false)