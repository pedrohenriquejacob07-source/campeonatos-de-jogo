document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const jogo = document.getElementById("jogo").value;

  const mensagem = document.getElementById("mensagem");

  mensagem.innerHTML =
    `🎉 <strong>${nome}</strong>, sua inscrição para o campeonato de <strong>${jogo}</strong> foi enviada com sucesso!`;

  mensagem.style.color = "#8aff90";
  mensagem.style.marginTop = "20px";

  // animação suave
  mensagem.style.opacity = 0;
  setTimeout(() => {
    mensagem.style.transition = "1s";
    mensagem.style.opacity = 1;
  }, 50);
});
