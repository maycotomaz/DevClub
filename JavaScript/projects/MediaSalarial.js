

/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!
*/


const Averagesalar = () => {
    const habitantes = {
        salario: 1400,
        filhos: 2 , 

    }
    const media = habitantes.salario / habitantes.filhos
    console.log(media)
}
Averagesalar()