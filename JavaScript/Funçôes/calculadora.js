


const calc = (number1, number2, oparation) => {
    
    let result 
    
    switch (oparation) {
        case "+":
            result = number1 + number2
            break;

         case "-":
            result = number1 - number2
            break;

        case "*":
            result = number1 * number2
            break;

        case "/":
            result = number1 / number2
            break;                   
    
        default:
            result = number1 + number2
            break;
    }

    return result
}

console.log(calc(2,4,"*"))