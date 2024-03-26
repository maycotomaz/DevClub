
const hora = Exacttime => {
    const now = new Date()

// Obter a hora atual
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Formatando a hora para exibição
const formattedTime = `${hours}:${minutes}:${seconds}`;

// Exibindo a hora atual
console.log("Hora exata:", formattedTime);
}

hora()
