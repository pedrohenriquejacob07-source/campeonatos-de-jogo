let pontuacao = 0;

document.getElementById("clickButton").addEventListener("click", () => {
  pontuacao++;
  document.getElementById("pontuacao").textContent = pontuacao;
});

function mostrarTela(telaId) {
  const telas = document.querySelectorAll(".tela");
  telas.forEach(tela => tela.classList.add("oculto"));
  document.getElementById(telaId).classList.remove("oculto");
}

