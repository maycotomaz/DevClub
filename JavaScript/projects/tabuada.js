

const tabuada = number1 => {

 
  
  if (number1 >= 1 && number1 <= 10) {
    for(let i = 1; i <= 10; i++){
      console.log(`${number1} x ${i} = ${number1 * i}`)
      
      
    }
 
}else if(number1 > 10){
  console.log("erro")
}
else{
  console.log("oo")
}
}
  tabuada()