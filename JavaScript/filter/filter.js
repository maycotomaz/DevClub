
/*
filter 
-cria um novo array, a partir do array pecorridop (array original)
-cria um novo array apenas com os elementos filtrados
aceita tres parametros
item do array
index
array completo
so vai filtrar quando a operaçao de true
*/ 



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

const JustVips = list.filter( client =>{
    let vip = client.vip == false
    

    return vip
})

console.log(JustVips)




const student = [
    {name:"mayco", testGrade: 7},
    {name:"maria", testGrade: 5},
    {name:"marcos", testGrade:8 },
    {name:"matheus", testGrade:9 },
    {name:"monica", testGrade: 3},
    {name:"myllenna", testGrade:2 },
    {name:"vitoria", testGrade: 10},
    {name:"cleitom", testGrade: 5},
]

const Approvedd = student.filter( students => students.testGrade < 7)

console.log(Approvedd)