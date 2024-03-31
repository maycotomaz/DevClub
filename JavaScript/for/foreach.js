/*
o foreach vai passar um por um 
 o foreach aceita ate 3 argumentos
 a primeira posiçao vai mostra iten por iten
 a segunda vai mostra o index, qual posiçao eu to
a terceira vai mostra o array completo

 allStudentsAge = allStudentsAge + student.age (vai pegar o valor que e 0 e vai somar com cada posiçao do array 0+23; 23+21 assim por diante)
  const resul = allStudentsAge / students.length ( vvou pegar o valor total da do allStudentsAge e dividir pelo tamanho do array usando o .length, assim vai sair a media da idade do plublico da empresa)

  resul.toFixed(2) o tofixed vai limitar o tanto de casas decimais que eu quero
 */

 const students = [
    {name: "mayco", age:23},
    {name: "vitoria", age:21},
    {name: "maria", age:52},
    {name: "marcos", age:50},
    {name: "matheus", age:19},
    {name: "monica", age:18},
    {name: "myllenna", age:25}
 ];

 let allStudentsAge = 0
 students.forEach( (student, index )=> {
    allStudentsAge += student.age 
 }) 
 const resul = allStudentsAge / students.length
 
 console.log(`a media dos alunos e ${resul.toFixed(1)}`)






 const estudantes = [
    {name: "mayco", age:23},
    {name: "vitoria", age:21},
    {name: "maria", age:52},
    {name: "marcos", age:50},
    {name: "matheus", age:19},
    {name: "monica", age:18},
    {name: "myllenna", age:25}
 ];

 
 estudantes.forEach( (student, index )=> {
    estudantes.sort()
    console.log(`o aluno  chama-se ${student.name} tem ${student.age} anos e esta na posiçao ${index}`)
 }) 
 

 