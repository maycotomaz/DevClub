/*
map
 - cria um novo array , a partir do array pecorrido {array original}
- cria um novo array, com a mesma quantidade de itens do array original
- aceita 3 paramentros
  - iten do array
  - index
  - array completo
*/ 


const numbers = [1, 2, 3, 4]
const students = [
    {name: "mayco", age:23},
    {name: "vitoria", age:21},
    {name: "maria", age:52},
    {name: "marcos", age:50},
    {name: "matheus", age:19},
    {name: "monica", age:18},
    {name: "myllenna", age:25}
 ];

const NewStudents = students.map( (student, index, array) =>{
    const NewStudent = {
        name:student.name + " da silva",
        age: student.age - 5
    }
    return NewStudent
})





const double = Number => Number * 2
const sum = Number => Number + 10
const real = Number => `R$ ${Number.toFixed(2)} Reais`

const newarray = numbers.map(double).map(sum).map(real)
console.log(newarray)






 /*const NewArray = numbers.map((Number)=> {
    const newNumber = Number + 10 * 2 / 3
    return newNumber
 })
 console.log(NewArray)*/