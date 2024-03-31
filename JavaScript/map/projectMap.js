

const list = [
    {name:"mayco", vip: true},
    {name:"maria", vip: false},
    {name:"marcos", vip: true},
    {name:"matheus", vip: true},
    {name:"monica", vip: false},
    {name:"myllenna", vip: true},
    {name:"vitoria", vip: false},
    {name:"cleitom", vip: false},
]

const NewList = list.map(setor =>{
    const NewList = {
        name: setor.name,
        vip: setor.vip,
        sala: setor.vip ? "black" : "Green"
    }

    return NewList
})
console.log(NewList)





 /*
  const NewList = list.map((setor) => {
    if(setor.vip === true){
        const secto = "black"
        console.log(`${setor.name} tem Cartao Vip, está no Setor ${secto}`)
    }else if (setor.vip === false){
        const secto = "Green"
        console.log(`${setor.name} nao tem Cartao Vip, está no Setor ${secto}`)
    }
    

 })
  */

  
  