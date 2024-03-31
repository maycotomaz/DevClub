

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


const approvedstudents = student.map(student=>{
    let approvedArNotte
    if(student.testGrade >= 7){
        approvedArNotte = "aprovado"
    }else{
        approvedArNotte = "reprovado"
    }
    const students = { 
        name: student.name,
        finalResult: approvedArNotte

    }
    return students
})
console.log(approvedstudents)


const NewStudent = student.map((estudante)=>{
    if(estudante.testGrade >= 7){
        console.log(`O Estudante ${estudante.name} foi Aprovado`)
    }else if (estudante.testGrade < 7){
        console.log(`O Estudante ${estudante.name} foi Reprovado`)
    }
})