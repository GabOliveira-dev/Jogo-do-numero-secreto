let numerosSecretos = []
let numeroLimite = 10

function numeroSecreto (){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite  + 1)
    let elementosLista = numerosSecretos.length

    if (elementosLista == numeroLimite){
        numerosSecretos = []
    }

    if (numerosSecretos.includes(numeroEscolhido)){
        return numeroSecreto()
    }else{
        numerosSecretos.push(numeroEscolhido)
        console.log (numerosSecretos)
        return numeroEscolhido
    }
}

let tentativa = 1
let secretNumber = numeroSecreto()
console.log(secretNumber)

function exibirTela (tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
} 

function mensagemInicial(){
    exibirTela("h1", "Bem vindo ao jogo do número secreto")
    exibirTela("p", "Escolha um número entre 1 a 10")
}
mensagemInicial()

function verificarChute(){
    let chute = Number(document.querySelector("input").value)

    if (chute === secretNumber){
        let palavraTentativa = tentativa > 1? "tentativas" : "tentativa"
        exibirTela("h1",`Você acertou o número secreto com ${tentativa} ${palavraTentativa}`)
        exibirTela("p", "Você conseguiu!!!")
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        if (chute > secretNumber){
            exibirTela("h1", `Você errou, o número secreto é menor que ${chute}`)
        }else{
            exibirTela("h1", `Você errou, o número secreto é maior que ${chute}`)
        }tentativa ++
        reiniciarTela()
    }
}

function reiniciarTela (){
    chute = document.querySelector("input")
    chute.value = ""
}

function reiniciar (){
    secretNumber = numeroSecreto()
    reiniciarTela()
    tentativa = 1
    mensagemInicial()
}


