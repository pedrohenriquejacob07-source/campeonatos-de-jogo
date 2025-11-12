let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
const tentativasTxt = document.getElementById('tentativas');

botao.addEventListener('click', () => {
    const palpite = parseInt(document.getElementById('palpite').value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = " Digite um número válido entre 1 e 100!";
        mensagem.style.color = "yellow";
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        mensagem.textContent = ` Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        mensagem.style.color = "limegreen";
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "🔼 O número secreto é maior!";
        mensagem.style.color = "orange";
    } else {
        mensagem.textContent = "🔽 O número secreto é menor!";
        mensagem.style.color = "orange";
    }

    tentativasTxt.textContent = `Tentativas: ${tentativas}`;
});
