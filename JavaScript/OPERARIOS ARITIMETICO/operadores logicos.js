/* 
! : negaçao, nao : 
!true = false
!false = true

&& E
: conjuçao, & logico  caneta azul e vermelha so serve so for as duas azul, caso contrario so da false
true && true = true
true && false = false
false && false = false

|| OU
 disjunçao ou logico cabeta azul ou vermelha so basta ter um caneta para da true, so da false se nao tem nenhum
true || true = true
true || false = true
false || false = false

*/
console.log(true && true)
console.log(true && false)
console.log(false && false)

console.log('------')

console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log('------')

console.log(!false )//negaçao ele vai inverte
console.log(!true)

console.log('------')
console.log('------')

console.log(!(!(true && true && true) && !(false && true || true)))
