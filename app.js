let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function exibirMensagemNoConsole() {
    console.log("O botão foi clicado!");
}

function exibirAlerta() {
    alert("Eu gosto um tiquinho de Javascript");
}

function exibirPrompt() {
    let nomeCidade = prompt("Digite o nome de uma cidade do Brasil que você gosta muito:")
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}