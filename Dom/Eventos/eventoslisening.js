
const select = document.querySelector("select")

const input = document.querySelector("input")

const button = document.querySelector("button")

//addEventListener adiciona um funçao que fica ouvindo o evento

const clickBaet = ()=>{
    console.log("hei vc me clicou")
    button.style.background="gray"
}
input.addEventListener('focus', () => {
    console.log("dei foco")
}) 
select.addEventListener('change', () =>{//change - mudança
    console.log(select.value)
})
button.addEventListener('click',clickBaet)