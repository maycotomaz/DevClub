

/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!
*/

const people = [
    {
        nunberOfChildren: 2,
        salary: 2000
    },
    {
        nunberOfChildren: 5,
        salary: 3000
    },
    {
        nunberOfChildren: 0,
        salary: 2500
    },
    {
        nunberOfChildren: 2,
        salary: 1000
    },
    {
        nunberOfChildren: 3,
        salary: 2300
    },
    {
        nunberOfChildren: 0,
        salary: 200
    },
    {
        nunberOfChildren: 0,
        salary: -2000
    }

   ]


function findAveragesalar(peopleInformation){

let Averagesalary = 0
let AverageChildren = 0
let heghtSalary = 0

for (let i = 0; i < peopleInformation.length; i++){// lenght passar pelo total do array

    const salary = peopleInformation[i].salary
    const children = peopleInformation[i].nunberOfChildren

    if(salary > heghtSalary)heghtSalary = salary

    if(salary < 0){
    console.log(`media de salario R$${(Averagesalary / i ).toFixed(0)}`)
    console.log(`media de salario R$${(AverageChildren / i ).toFixed(0)}`)
    console.log(`media de salario R$${heghtSalary}`)
    break
}else{
    Averagesalary = Averagesalary + salary
    AverageChildren += children
}

}
}

findAveragesalar(people)