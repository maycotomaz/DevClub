

const temperatura = 41
switch (temperatura) {
    case 34:
        console.log("a sua temperatura esta baixa!!!")
        break;

    case 36:
        console.log("a sua temperatura esta normal")
        break;  

    case 37:
        console.log("Você está com Febre!")
        break;

    case 40:
        console.log("a sua temperatura esta Muuito Alta!!!")
        break;

    default:
        console.log("Temperatura nao encontrada")
        break;
}