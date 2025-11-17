
const botaoAcao = document.getElementById('actionButton');

const divResposta = document.getElementById('resposta');

const userInput = document.getElementById('userInput')

botaoAcao.addEventListener('click', function() {

let mensagem = `Parabéns ${userInput.value} você ganhou 70k de Robux`;

  divResposta.textContent = mensagem

  if (userInput.value === "Admin"){
    let mensagem1 = "☠️☠️☠️☠️"
    divResposta.textContent = mensagem1
  }

});