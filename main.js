const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)

for (let i = 0; i < botoes.length; i++) {
    botoes[1].onclick = function(){
        for(let j=0; j<botoes; j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
            textos[i].classList.add("ativo")
    }
    
}
