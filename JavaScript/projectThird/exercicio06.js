

let notas = [7, 10, 8, 5]
let nomes = ["Mayco", "maria", "matheus","monica"]
let explicacoes = [];
for(let i = 0; i < notas.length; i++){
    let nota = notas[i]
    let nome = nomes[i]
    let explicacao = "";


 if (nota < 0 || nota > 10) {
    explicacao = "Nota de 0. O desempenho foi muito insatisfatório.";
} else if (nota <= 2) {
    explicacao = "Nota baixa. Há muitos aspectos a serem melhorados.";
} else if (nota <= 4) {
    explicacao = "Nota razoável. Alguns pontos positivos, mas muitos a serem corrigidos.";
} else if (nota <= 6) {
    explicacao = "Nota média. Desempenho aceitável, mas com áreas para melhorias significativas.";
} else if (nota <= 8) {
    explicacao = "Nota alta. Desempenho sólido com alguns detalhes a serem ajustados.";
} else if (nota < 10) {
    explicacao = "Nota excelente. Desempenho muito bom, com pequenas melhorias possíveis.";
} else {  // nota == 10
    explicacao = "Nota perfeita! Desempenho excepcional em todos os aspectos.";
}
explicacoes.push(explicacao);


}

for (let i = 0; i < notas.length; i++) {
    console.log(`Aluno: ${nomes[i]} - Nota: ${notas[i]} - Explicação: ${explicacoes[i]}`);
}