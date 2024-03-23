

const NumberOne = 10
const NumberTwo = 5
const NumberThird = 20

if(NumberOne > NumberTwo && NumberOne > NumberThird){
    console.log(`NumberOne = ${NumberOne} e o maior`)
}else if(NumberTwo > NumberOne && NumberTwo > NumberThird){
    console.log(`NumberTwo = ${NumberTwo} e o maior`)
}else if(NumberThird > NumberOne && NumberThird > NumberTwo){
    console.log(`NumberThird = ${NumberThird} e o maior`)
}
if(NumberTwo < NumberOne && NumberTwo < NumberThird){
    console.log(`${NumberTwo} e o menor`)
}