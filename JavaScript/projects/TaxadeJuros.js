

function TaxaJuros(inicial, atual, tempo ){
    
   const juros = (atual - inicial) / (inicial * tempo)
   console.log((juros * 100).toFixed(2) + "%")
}
TaxaJuros(1000, 1200, 10) //vai mostra quantos % ganho ao mes