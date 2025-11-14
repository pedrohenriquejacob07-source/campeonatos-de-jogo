let numeroSecreto;
let tentativas = 0;

/* Exibe o Menu Principal ao entrar */
window.onload = () => {
    document.getElementById("menu-principal").style.display = "block";
};

/* Funções de Navegação */
function esconderMenus() {
    document.getElementById("menu-principal").style.display = "none";
    document.getElementById("menu-historia").style.display = "none";
    document.getElementById("menu-jogo").style.display = "none";
}

function abrirMenuHistoria() {
    esconderMenus();
    document.getElementById("menu-historia").style.display = "block";
}

function voltarMenu() {
    esconderMenus();
    document.getElementById("menu-principal").style.display = "block";
}

/* Início do jogo */
function iniciarJogo() {
    esconderMenus();
    document.getElementById("menu-jogo").style.display = "block";

    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;

    document.getElementById("resultado").textContent = "";
    document.getElementById("palpite").value = "";
    document.getElementById("reiniciar").style.display = "none";
}

/* Verificação do palpite */
function verificar() {
    let palpite = Number(document.getElementById("palpite").value);
    let resultado = document.getElementById("resultado");

    resultado.classList.remove("acertou");

    if (!palpite) {
        resultado.textContent = "Digite um número válido!";
        return;
    }

    tentativas++;

    if (palpite < numeroSecreto) {
        resultado.textContent = "🔻 O número é maior!";
    } 
    else if (palpite > numeroSecreto) {
        resultado.textContent = "🔺 O número é menor!";
    } 
    else {
        resultado.innerHTML = `🎉 Acertou! O número era <b>${numeroSecreto}</b>!<br>
                               Tentativas: <b>${tentativas}</b>`;
        resultado.classList.add("acertou");

        document.getElementById("reiniciar").style.display = "inline-block";
    }
}

/* Reiniciar */
function reiniciarJogo() {
    iniciarJogo();
}
