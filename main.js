const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function(){
        for(let j=0; j<botoes; j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
            textos[i].classList.add("ativo")
    }
    
}

const contadores = document.querySelectorAll(".contador")
const tempoobjetivo1 = new Date("2026-10-05T00:00:00")
const tempoobjetivo2 = new Date("2026-11-05T00:00:00")
const tempoobjetivo3 = new Date("2026-12-05T00:00:00")
const tempoobjetivo4 = new Date("2027-01-05T00:00:00")

const tempos = [tempoobjetivo1,tempoobjetivo2,tempoobjetivo3,tempoobjetivo4]

function cauculatempo(tempoobjetivo){
    let tempoatual = new Date();
    let tempofinal = tempoobjetivo - tempoatual
console.log(tempofinal)
let segundos = Math.floor(tempofinal / 1000)
let minutos = Math.floor(segundos / 60)
let horas = Math.floor(minutos / 60)
let dias = Math.floor(horas / 24)

segundos %= 60
minutos %= 60
horas %=24
if (tempofinal > 0){
    return [dias, horas, minutos, segundos]
}else{
    return [0,0,0,0]
    }
}
function atualizacronometro(){
    for(let i=0; 1<contadores.length;i++){
        document.getElementById("dias"+1).textcontent = cauculatempo(tempos[i])[0]
    }
}

cauculatempo(tempoobjetivo)